# Developer Profile Generator

Welcome to the developer profile generator. It is a command-line application that dynamically generates an HTML and PDF profile from a GitHub username. 

# Instructions

How To Use The App:
1. On your own device, clone the repository from: https://github.com/magsmagsmags/PortfolioGen.git
2. Install the modules with: npm install in your command line after cloning this generator to your local device
```sh
npm install
```
3. Open index.js in Terminal, then input the following command:

```sh
node index.js
```
4. Enter a name, a GitHub profile name, and your preferred color from the options provided 
5. The profile will generate an HTML and PDF document of the relevant information from the GitHub username/profile

# Screenshots
* ![Screenshot](/assets/images/pdf_screenshot.png)
* ![Screenshot](/assets/images/x.png)

## Description

The user will be prompted for their peferred color from the options given. This color selection will be used as the background color for the generated pdf containing GitHub profile info.

The PDF we generate will contain the following from the Github username profile that was entered:

* Profile image
* User name
* Links to the following:
  * User location via Google Maps
  * User GitHub profile
  * User blog
* User bio
* Number of public repositories
* Number of followers
* Number of GitHub stars
* Number of users following

## Motivation

When preparing a report for stakeholders, it is important to have up-to-date information about members of a development team. Rather than navigating to each team member's GitHub profile, a command-line application will allow for quick and easy generation of profiles in PDF format.

## Minimum Requirements

* The application generates a PDF resume from the user provided GitHub profile.

* The generated resume includes a bio image from the user's GitHub profile.

* The generated resume includes the user's location and a link to their GitHub profile.

* The generated resume includes the number of: public repositories, followers, GitHub stars and following count.

* The background color of the generated PDF matches the color that the user provides.

# Contribute
Please reach out to me via Slack (Mags Kiefer) or at sheakiefer@gmail.com for code suggestions, critiques, feedback, or offers to collaborate. 

# Credits

* Brittany Taylor
* Israel Medina
* Eric Scott

--------------------------------