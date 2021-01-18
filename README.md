# College Dashboard

A MERN-based application that fetches data of colleges & students from APIs based on mock-data using self-created functions.<br>
| MERN |

# Documentation for the APIs:

### Two collections:

- Colleges: [Documentation Link](https://documenter.getpostman.com/view/11031021/TVzXAZyU)
- Students: [Documentation Link](https://documenter.getpostman.com/view/11031021/TVzXAZyY)

## Demo:

The live demo for the application can be found here:
[Link](https://college-dashboard-app.herokuapp.com)

## Web Application Information:

### Graphs (created using react-chartjs-2 + chart.js):

- I have plotted 3 graphs which calls APIs based on different query parameters are per the use-case. Each of the graph has a different aim to satisfy.
- Graph 1 (Doughnut Chart): I've considered one college (hardcoded for development purposes). I have used this college's ID to perform radius-based searching to locate other nearby colleges. I have defined in the API Documentation above how this is being performed.
- Graph 2 (Pie Chart): I've considered a default case where I'm filtering out colleges based on the no. of students in each college (here, greater than 400).
- Graph 3 (Bar Chart): Filtering out colleges based on the COURSES they've to offer and the no. of students in each of that respective college.

### Colleges:

- A table view of colleges in a pagination view.
- Clicking on each college's row enables a modal to be shown which outputs more details about that particular college.

### Students:

- Same as colleges, only shows results in respect to the students itself.

### Other UI Elements:

- Contact Us, Messages, Support, Logout: These are placeholders to depict further possibilities of implementation (i.e. auth logic and/or expanding the application)
- They also show the working of redirection in the application to the base route '/' upon click.

### Responsiveness:

- The application has been made as responsive as I could - to the best of my abilities with a burger icon being shown upon resizing to a particular width.
- This icon is dynamic in nature and consists of the header-navigation items (not the sidebar). It also consists of a backdrop behind and a click anywhere makes this navigation to disappear.

## Folder Structure

##### Frontend

<p align="center">
  <img alt="Folder-Structure" width="300" height="400" src="./ProjectFiles/github/frontend.png">
</p>

##### Backend

<p align="center">
  <img alt="Folder-Structure" width="350" height="400" src="./ProjectFiles/github/backend.png">
</p>

#### Recommended IDE

**VSCode**  
Others: Atom, Sublime or simply choose as per your comfortability and experience.

#### Knowledge

Stack: MERN - Node-Express-Mongoose + React-Redux
Database: MongoDB [Cloud: Atlas]  
Deployment [Optional]: Possibilities: AWS/Firebase/Localhost/Heroku/Netlify [Used here: [Heroku](https://devcenter.heroku.com/articles/heroku-cli) - Heroku Download]

#### Installation

##### Node Package Manager (NPM)

If you don't have it installed, go ahead and install it. Refer here to follow the steps: https://www.npmjs.com/get-npm

##### ReactJS Library

Download the 'react' and 'react-dom' packages using npm. Also, 'create-react-app' which creates a basic project layout for the application.

```
>> npm i react
>> npm i react-dom
>> npm i create-react-app -g ('-g' tag installs it globally to be accessed from anywhere)

```

##### Deployment

Heroku - both for backend (APIs) as well as the react application (having seperate URLs).

## Further Possibilities

- Graph plotting can be turned into having a more dynamic nature.
- Improving the basic layout/project structure of the application
- Further separating the business-presentational logic
- Better use of redux store and/or use of redux-saga
- Design improvements are definitely possible

## Built With

- [NodeJS](https://nodejs.org/en/download/) - JavaScript Runtime Environment

* [ReactJS](https://reactjs.org/docs/getting-started.html) - JavaScript Library

- [Express](https://nodejs.org/en/download/) - Web Application Framework
- [VSCode](https://code.visualstudio.com/download) - IDE
- [MongoDB: ](https://www.mongodb.com/download-center/community) - Database /NoSQL/
- [Hosting on Atlas (cloud service): ](https://www.mongodb.com/cloud/atlas) - Cloud Database

* [Deploying on Heroku](https://dashboard.heroku.com/) - Cloud Hosting

- [Postman: ](https://www.postman.com) - API Testing
- [Optional] [GUI for MongoDB: ](https://www.mongodb.com/products/compass) - Software i.e. GUI version for MongoDB

## Authors

- **Mandeep Singh** - [Ryuk-hash](https://github.com/ryuk-hash)
