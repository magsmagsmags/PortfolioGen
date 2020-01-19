const generateHTML = require("./generateHTML.js");
// const GithubHelper = require("./githubhelper");

const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios").default;
// const HTMLToPDF = require("html-pdf");
// const generate = require("./generateHTML");

// moved to githubhelper.js: const axios = require('axios').default;
const HTMLToPDF = require("html-pdf");
const generate = require("./generateHTML");


// const helper = new GithubHelper();

// function writeToFile(fileName, data) {
// }; don't need? 


function init() {
    //getUserInfo is asyncronous bc we use axios for a network call to return a promise
    inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is your name, my friend?"
        },
        {
            type: "input",
            name: "username",
            message: "What is your GitHub Username?"
        },
        {
            type: "rawlist",
            name: "color",
            message: "Which color do you like best?",
            choices: [
                "green",
                "blue",
                "pink",
                "red"
            ]
        }
    ]).then(function (res) {
        const nickname = res.name;
        const userName = res.username;
        const userColor = res.color;
        const queryURL = `https://api.github.com/users/${userName}`;
        const starredURL = `https://api.github.com/users/${userName}/starred`;
        console.log(userName, userColor, nickname);

        gitHubRequest(queryURL).then(function (userData) {
            gitHubStars(starredURL).then(function (starResponse) {
                const options = {
                    format: 'Letter'
                };
                fs.writeFile("profile.html", generateHTML, function (err) {
                    console.log(err);
                    HTMLToPDF.create(generate(res, starResponse, userData), options).toFile(`./${userName}.pdf`, function (err, response) {
                        if (err) return console.log(err);
                        console.log(response);
                    });
                });
            });
        });

        function gitHubRequest(queryURL) {
            return axios.get(queryURL)
                .then(function (gitResponse) {

                    let userData = {
                        proPic: (gitResponse.data.avatar_url + ".png"),

                        fullName: (gitResponse.data.name),

                        gitUsername: (gitResponse.data.login),

                        location: (gitResponse.data.location),

                        profileURL: (gitResponse.data.html_url),

                        blog: (gitResponse.data.blog),

                        userBio: (gitResponse.data.bio),

                        publicRepos: (gitResponse.data.public_repos),

                        followers: (gitResponse.data.followers),

                        following: (gitResponse.data.following)
                    };

                    return userData;
                })
                .catch(function (error) {
                    console.log(error);
                });
        };

        function gitHubStars(starredURL) {
            return axios.get(starredURL)
                .then(function (starResponse) {
                    return starResponse.data.length;
                })
                .catch(function (error) {
                    console.log(error);
                });
        };
    })
}; //init closing curly brace


init();

// fs.writeFile("profile.html", fileHTML, function (err) {
//     console.log(err);

//     //then generate html to pdf
//     // keeping checking against your demo html 
// })
// })
// .catch(error => {
// console.error('Rejected function called: ' + error.message);
// })