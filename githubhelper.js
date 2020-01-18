const axios = require("axios");

function GeitHubHelper() {}

GeitHubHelper.prototype, getUserInfo = function (username) {
    const someUrl = "https://api.github.com/users/" + username;
    return axios.get(someUrl);
}


module.exports = GitHubHelper;