// fs
//axios
//inquierer
// generator
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require('axios').default;
const querystring = require('querystring'); ///// ???

const HTMLToPDF = require("html-pdf");
const generate = require("./generateHTML.js");
const generateHTML = require("./generateHTML.js");
const GitHubHelper = require(); /////////// ?????







const questions = [{
        type: "input",
        name: "name",
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

const helper = new GitHubHelper();

function init() {

    inquirer.prompt((questions).then(response => {
        helper.getUserInfo(response.username).then(ghResponse => {
            const value = generateHTML({
                name: response.name,
                followers: ghResponse.data.followers, // define ghResponse
                color: "pink"
            });
            console.log(value);
            fs.writeFile("profile.html", fileHTML, function (err) {
                console.log(err);

                //then generate html to pdf
                // keeping checking against your demo html 
            })
        })
    }));


    init();