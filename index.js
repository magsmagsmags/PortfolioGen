const generateHTML = require("./generateHTML.js");
const GithubHelper = require("./githubhelper.js");
const fs = require("fs");
const inquirer = require("inquirer");
// generator
//// var pdf = require("html-pdf");


// moved to githubhelper.js: const axios = require('axios').default;
// const querystring = require('querystring'); ///// ???



const questions = [{
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
];

const helper = new GithubHelper();

// function writeToFile(fileName, data) {

// };


function init() {
    //getUserInfo is asyncronous bc we use axios for a network call to return a promise
    inquirer.prompt(questions).then(response => {
        helper.getUserInfo(response.username).then(ghResponse => {
            const fileHTML = generateHTML({
                name: response.name,
                followers: ghResponse.data.followers,
                // ghResponse defined? check. 
                color: "pink"
            });
            console.log(fileHTML);
            fs.writeFile("profile.html", fileHTML, function (err) {
                console.log(err);

                //then generate html to pdf
                // keeping checking against your demo html 
            })
        })
    }) // response paren and curly
}; //init closing curly brace


init();