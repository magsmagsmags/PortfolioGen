// const axios = require("axios"); /// .default?
// const HTMLToPDF = require("html-pdf");
// const generate = require("./generateHTML");

// const starredURL = "https://api.github.com/users/${userName}/starred";


// function GithubHelper() {}

// GithubHelper.prototype.getUserInfo = function (userName) {
//     const someUrl = "https://api.github.com/users/" + userName;
//     return axios.get(someUrl);
// }

// HTMLToPDF.create(generate(res, starResponse, userData), options).toFile(`./${userName}.pdf`, function (err, response) {
//     if (err) return console.log(err);
//     console.log(response);
// });
// // });
// // });
// // });

// function GithubHelper(someUrl) {
//     return axios.get(someUrl)
//         .then(function (gitResponse) {

//             let userData = {
//                 proPic: (gitResponse.data.avatar_url + ".png"),

//                 fullName: (gitResponse.data.name),

//                 gitUsername: (gitResponse.data.login),

//                 location: (gitResponse.data.location),

//                 profileURL: (gitResponse.data.html_url),

//                 blog: (gitResponse.data.blog),

//                 userBio: (gitResponse.data.bio),

//                 publicRepos: (gitResponse.data.public_repos),

//                 followers: (gitResponse.data.followers),

//                 following: (gitResponse.data.following)
//             };

//             return userData;
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// };

// const gh = new GithubHelper();
// gh.getUserInfo(res.userName).then(ghResponse => console.log(ghResponse.data));

// module.exports = GithubHelper;