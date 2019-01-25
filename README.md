# Mobile Web Specialist Certification Course
---

## Table of Contents

- [Project Overview](#ProjectOverview)
- [What I implemented](#WhythisProject?)
- [Built With](#BuiltWith)
- [Installation](#Installation)
- [External Code Used in this Project](#ExternalCodeUsedinthisProject)
- [Credits](#credits)
- [Acknowledgements](#Acknowledgements)
- [Contributing](#contributing)
- [LICENSE](#LICENSE)



# Project Overview

The Udacity overview for this project states: In this project we were given a buggy boiler plate unresponsive and inaccessible restaurant review application.

## What I implemented

*Responsiveness best practices*
Caching data by utilising service worker, python server and chrome developer tools to make the site more responsive and be able to continue working if the user lost internet power once all pages had been cached.
UtilisED Flexbox and Media Query to make the application cross platform responsive and user friendly.

*Accessibility best practices*
 I used chrome developer tools to run an audit on the sites  accessibility and adjusted the accessibility of the site from the feedback of the audit. I gained skills such as adding aria-roles and managing focus. Tab index order and  accessibility features are important to add to the responsiveness of a sight but mainly to ensure we cater for people with screen readers and disabilities.

## Built 

Languages:

HTML
CSS
JavaScript

API taken data from
[leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/) 

## Installation

1. Fok and clone this repository to your local computer.
2. Next you need to open GitBash and cd into the project.
3. You need to run a server to use the service worker, render the api and access all the applications pages. There are a number of options depending on your system environment.
*In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this,and you don't even need to know Python. For most people, it's already installed on your computer.
 * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
 	* Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8000`.
2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.

## External Code Used in this Project

Some Code reused or bits taken from the following sources:
The starter code for this project comes from the following Udacity GitHub address of https://github.com/udacity/mws-restaurant-stage-1 repo and I cloned it.
Some code Mohamed Riaad study jam at https:www.youtube.com/watch?v=TxXwlOAXUko 
Some code from the walkthrough tutorials blogs by Matthew Cranford at https://matthewcranford.com.


## Credits

The Udacity course work, written tutorials by Mathew Cranford, MDN Documentation and youtube Study Jam by Mohamed Riaad 

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). Which have made the api map rendering posible.

# Acknowledgements

Big thanks to all who support me during my projects at Udacity, at home and on the web. 

Especially my student group at Udacity/Google Scholarship Slack workspace and all of my study groups! 

A special shout out to the talented Mohammad Riaad for going the extra mile with his youtube video tutorial walkthroughs from Udacity. Your talkkthrough explanation add insigts and extra resources always add power to our pack.

# Contributing

This repository is one of my projects as a Udacity student. Therefore, I most likely will not accept pull requests.

For details, look at the file in his repo called [CONTRIBUTING.md](CONTRIBUTING.md) in this project repository.

# License
(c) Martha Taylor 2018.

This repository is licensed under the [MIT license](https://choosealicense.com/licenses/mit/#). For further information see the LICENSE file in this project repository.