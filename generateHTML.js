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
  }
};
// wrapper: ${colors[data.color].wrapperBackground};
// photo border: ${colors[data.color].photoBorderColor}

function generateHTML(data) {
  return `
  
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
    <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
    <title>Dev Profile</title>
    <style>
    h1 {
      background-color: ${colors[data.color].headerBackground};
      color: ${colors[data.color].headerColor};
    }
    </style>
</head>
<body>
    <h1> ${data.name}</h1>
    <h2> Has ${data.followers} followers on github</h2>
    <img src="https://www.placehold.it/500x500" alt="">

    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Hi! My name is ${answers.username}</h1>
            <p class="lead">I am from ${answers.loc}.</p>
            <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
            <ul class="list-group">
                <li class="list-group-item">My GitHub username is ${answers.github}</li>
                <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
            </ul>
        </div>
    </div>
</body>

</html> 
`
};


module.exports = generateHTML;