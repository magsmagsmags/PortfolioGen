.then(function (res) {
        const userName = res.username;
        const userColor = res.color;

        const queryURL = `https://api.github.com/users/${userName}`;
        const starredURL = `https://api.github.com/users/${userName}/starred`;







        //defining const variables
        const inquirer = require("inquirer");
        const fs = require("fs");
        const axios = require('axios').default;
        const pdf = require('puppeteer');
        const util = require('util');
        const writeFileAsync = util.promisify(fs.writeFile);




        //Axios call

        function pornhubRequest(queryURL) {
            return axios.get(queryURL)
                .then(function (response) {



                })
        }

    }



    function githubQuery(queryUrl) {

        return axios.get(queryUrl)
            .then(function (response) {

                profileImg = response.data.avatar_url + ".png";
                // console.log(profileImg);

                githubUsername = response.data.login;
                // console.log("Username: " + githubUsername);

                userCity = response.data.location;
                // console.log("Lives in: " + userCity);

                userGithubProfileURL = response.data.html_url;
                // console.log("Github URL: " + userGithubProfileURL);

                userBlogURL = response.data.blog;
                // console.log("Blog: " + userBlogURL);

                userBio = response.data.bio;
                // console.log(userBio);

                numberOfRepos = response.data.public_repos;
                // console.log("Number of Public Repos: " + numberOfRepos);

                numberofFollowers = response.data.followers;
                // console.log("Number of Followers: " + numberofFollowers);

                userCompany = response.data.company;
                // console.log(userCompany);

                // THIS DOESN'T WORK-- Must do a second Axios call to grab number of starred repos. See below!
                // const numberofGitStars = response.data.starred_url.length;
                // console.log("Number of Starred Projects: " + numberofGitStars);    59?! I have not starred that much, yet.

                numberofUsersFollowing = response.data.following
                // console.log("Number of Users Following: " + numberofUsersFollowing);
                return response;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            })
    }
)