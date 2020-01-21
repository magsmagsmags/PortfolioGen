  const colors = {
    green: {
      wrapperBackground: "#E6E1C3",
      headerBackground: "#C1C72C",
      headerColor: "black",
      photoBorderColor: "#black"
    },
    blue: {
      wrapperBackground: "#5F64D3",
      headerBackground: "#26175A",
      headerColor: "white",
      photoBorderColor: "#73448C"
    },
    pink: {
      wrapperBackground: "#879CDF",
      headerBackground: "#FF8374",
      headerColor: "white",
      photoBorderColor: "#FEE24C"
    },
    red: {
      wrapperBackground: "#DE9967",
      headerBackground: "#870603",
      headerColor: "white",
      photoBorderColor: "white"
    },
    purple: {
      wrapperBackground: "#9f7dd3",
      headerBackground: "#879CDF",
      headerColor: "white",
      photoBorderColor: "#FEE24C"
    },
    orange: {
      wrapperBackground: "#FCAA4C",
      headerBackground: "#F07110",
      headerColor: "white",
      photoBorderColor: "#F7F363",
      color: "#323135"
    },
    yellow: {
      wrapperBackground: "#F3AB40",
      headerBackground: "#FFF087",
      headerColor: "#323135",
      photoBorderColor: "#FDBAFB",
      color: "#323135"
    }
  };

  function generateHTML(res, starResponse, userData) {
    return `<!DOCTYPE html>
  <html lang="en">
     <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <title>${userData.fullName}</title>
        <style>
            @page {
              margin: 0;
            }
           *,
           *::after,
           *::before {
           box-sizing: border-box;
           }
           html, body {
           padding: 0;
           margin: 0;
           }
           html, body, .wrapper {
           height: 100%;
           }
           .wrapper {
           background-color: ${colors[res.color].wrapperBackground};
           padding-top: 100px;
           }
           body {
           background-color: white;
           -webkit-print-color-adjust: exact !important;
           font-family: 'Cabin', sans-serif;
           }
           main {
           background-color: #E9EDEE;
           height: auto;
           padding-top: 30px;
           }
           h1, h2, h3, h4, h5, h6 {
           font-family: 'BioRhyme', serif;
           margin: 0;
           }
           h1 {
           font-size: 3em;
           }
           h2 {
           font-size: 2.5em;
           }
           h3 {
           font-size: 2em;
           }
           h4 {
           font-size: 1.5em;
           }
           h5 {
           font-size: 1.3em;
           }
           h6 {
           font-size: 1.2em;
           }
           .photo-header {
           position: relative;
           margin: 0 auto;
           margin-bottom: -50px;
           display: flex;
           justify-content: center;
           flex-wrap: wrap;
           background-color: ${colors[res.color].headerBackground};
           color: ${colors[res.color].headerColor};
           padding: 10px;
           width: 95%;
           border-radius: 6px;
           }
           .photo-header img {
           width: 250px;
           height: 250px;
           border-radius: 50%;
           object-fit: cover;
           margin-top: -75px;
           border: 6px solid ${colors[res.color].photoBorderColor};
           box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
           }
           .photo-header h1, .photo-header h2 {
           width: 100%;
           text-align: center;
           }
           .photo-header h1 {
           margin-top: 10px;
           }
           .links-nav {
           width: 100%;
           text-align: center;
           padding: 20px 0;
           font-size: 1.1em;
           }
           .nav-link {
           display: inline-block;
           margin: 5px 10px;
           }
           .workExp-date {
           font-style: italic;
           font-size: .7em;
           text-align: right;
           margin-top: 10px;
           }
           .container {
           padding: 50px;
           padding-left: 100px;
           padding-right: 100px;
           }
           .row {
             display: flex;
             flex-wrap: wrap;
             justify-content: space-between;
             margin-top: 20px;
             margin-bottom: 20px;
           }
           .card {
             padding: 20px;
             border-radius: 6px;
             background-color: ${colors[res.color].headerBackground};
             color: ${colors[res.color].headerColor};
             margin: 20px;
           }
           .col {
           flex: 1;
           text-align: center;
           }
           a, a:hover {
           text-decoration: none;
           color: inherit;
           font-weight: bold;
           }
           @media print { 
            body { 
              zoom: .75; 
            } 
           }
        </style>
        </head>
        <body>
    <div class="wrapper">
        <div class="photo-header"><img class="photo-header img" src="${userData.proPic}" alt="profile-img">
        <h3>Hi!</h3>
        <h3>My name is ${userData.fullName}!</h3>
        <div class="links-nav">
          <span class="nav-link"><a href="https://www.google.com/maps/place/${userData.location}">${userData.location}</a></span>
          <span class="nav-link"><a href="${userData.profileURL}">Github</a></span>
          <span class="nav-link"><a href="${userData.blog}">Blog</a></span>
        </div>
    </div>
  <main>
  <div class="container">
  <div class="row">
      <h5>${userData.userBio}</h5>
    </div>
    <div class="row">
      <div class="col">
        <div class="card">
          <h4>Public Repositories</h4>
          <h5>${userData.publicRepos}</h5>
        </div>
        <div class="card">
          <h4>Starred Projects</h4>
          <h5>${userData.starResponse}</h5>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <h4>Followers</h4>
        <h5>${userData.followers}</h5>
      </div>
      <div class="card">
        <h4>Following</h4>
        <h5>${userData.following}</h5>
      </div>
    </div>
    </div>
  </div>
  </main>
  </div>
  <footer></footer>
  </body>
</html>`
  };

  module.exports = generateHTML;





  // const init = require("./index.js");


  // const colors = {
  //   green: {
  //     wrapperBackground: "#E6E1C3",
  //     headerBackground: "#C1C72C",
  //     headerColor: "black",
  //     photoBorderColor: "#black"
  //   },
  //   blue: {
  //     wrapperBackground: "#5F64D3",
  //     headerBackground: "#26175A",
  //     headerColor: "white",
  //     photoBorderColor: "#73448C"
  //   },
  //   pink: {
  //     wrapperBackground: "#879CDF",
  //     headerBackground: "#FF8374",
  //     headerColor: "white",
  //     photoBorderColor: "#FEE24C"
  //   },
  //   red: {
  //     wrapperBackground: "#DE9967",
  //     headerBackground: "#870603",
  //     headerColor: "white",
  //     photoBorderColor: "white"
  //   }
  // };
  // // wrapper: ${colors[data.color].wrapperBackground};
  // // photo border: ${colors[data.color].photoBorderColor}

  // function generateHTML(res, starResponse, userData) {
  //   return `

  //   <!DOCTYPE html>
  // <html lang="en">
  // <head>
  //     <meta charset="UTF-8">
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //     <meta http-equiv="X-UA-Compatible" content="ie=edge">
  //     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
  //     <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
  //     <title>${userData.fullName}</title>
  //     <style>

  //     html, body, .wrapper {
  //     height: 100%;
  //     }
  //     .wrapper {
  //       background-color: ${colors[res.color].wrapperBackground};
  //       padding-top: 100px;
  //       }
  //     h1 {
  //       background-color: ${colors[res.color].headerBackground};
  //       color: ${colors[res.color].headerColor};
  //     }
  //     .photo-header {
  //       position: relative;
  //       margin: 0 auto;
  //       margin-bottom: -50px;
  //       display: flex;
  //       justify-content: center;
  //       flex-wrap: wrap;
  //       background-color: ${colors[res.color].headerBackground};
  //       color: ${colors[res.color].headerColor};
  //       padding: 10px;
  //       width: 95%;
  //       border-radius: 6px;
  //       }
  //       .photo-header img {
  //       width: 250px;
  //       height: 250px;
  //       border-radius: 50%;
  //       object-fit: cover;
  //       margin-top: -75px;
  //       border: 6px solid ${colors[res.color].photoBorderColor};
  //       box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
  //       }
  //       .photo-header h1, .photo-header h2 {
  //       width: 100%;
  //       text-align: center;
  //       }
  //       .photo-header h1 {
  //       margin-top: 10px;
  //       }
  //     </style>
  // </head>
  // <body>
  //     <h1> ${res.name}</h1>
  //     <h2> Has ${userData.followers} followers on github</h2>
  //     <img src="https://www.placehold.it/500x500" alt="">

  //     <div class="jumbotron jumbotron-fluid">
  //         <div class="container">
  //             <h1 class="display-4">Hi! My name is ${userData.fullName}</h1>
  //             <p class="lead">I am from ${userData.location}.</p>
  //             <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
  //             <ul class="list-group">
  //                 <li class="list-group-item">My GitHub username is ${userData.gitUsername}</li>
  //             </ul>
  //         </div>
  //     </div>
  // </body>

  // </html> 
  // `
  // };


  // module.exports = generateHTML;