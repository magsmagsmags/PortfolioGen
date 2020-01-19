const axios = require("axios"); /// .default?

function GithubHelper() {}

GithubHelper.prototype.getUserInfo = function (username) {
    const someUrl = "https://api.github.com/users/" + username;
    return axios.get(someUrl);
}

const gh = new GithubHelper();
gh.getUserInfo("magsmagsmags").then(response => console.log(response.data));

module.exports = GithubHelper;