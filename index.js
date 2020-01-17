// fs
//axios
//inquierer
// generator
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

const HTMLToPDF = require("html-pdf");
const generate = require("./generateHTML.js");

let profileImg;
let githubUsername;
let userCity;
let userGithubProfileURL;
let userBlogURL;
let userBio;
let numberOfRepos;
let numberofFollowers;
let numberofUsersFollowing;
let userCompany;


//========= Inquirer prompts the user for Github username and favorite color.


inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is your GitHub Username?"
        },
        {
            type: "rawlist",
            name: "color",
            message: "What is your favorite color?",
            choices: [
                "green",
                "blue",
                "pink",
                "red"
            ]
        }
    ])
    .then(function (res) {
            console.log(res.name, res.color);
            const userName = res.name;
            const userColor = res.color;

            .then(function (res) {
                        // we create a json file with that information.
                        var githubUsername = res.username.split(' ').join('') + ".json";

                        fs.writeFile(githubUsername, JSON.stringify(res, null, '\t'), function (err) {

                            if (err) {
                                //=========== logs an error if incorrect
                                return console.log(err);
                            }



                            //=============== If correct, we will do an axios request to find information on this user.
                            const queryUrl = "https://api.github.com/users/" + res.username;
                            const queryStarUrl = "https://api.github.com/users/" + res.username + "/starred";


                        });