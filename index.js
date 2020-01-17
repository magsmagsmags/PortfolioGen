// fs
//axios
//inquierer
// generator
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require('axios').default;
// const db = require("db");
// const open = require('open');

const HTMLToPDF = require("html-pdf");
const generate = require("./generateHTML.js");
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
    ]).then(function (res) {
            console.log(res.name, res.color);
            const userName = res.name;
            const userColor = res.color;