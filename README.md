## MERN Song App
This is a full stack web application that lets you manage information for songs. You can create, list, update and remove songs, as well as view some statistics about them. The app is built using the MERN (MongoDB, ExpressJS, ReactJS & NodeJS) stack.

## Installation and Usage
To install and run the project locally, you need to have Node.js, npm, and Docker installed on your machine. Then, follow these steps:

Clone this repository to your local machine using git clone
`https://github.com/AbduselamNur/song_mern`

Navigate to the project folder using cd mern-song-app.

Install the dependencies for the backend and the frontend using `npm install` in both the backend and the frontend folders.

Build the Docker image for the backend using `docker build -t backend-app` . in the backend folder.

Run the Docker container for the backend using `docker run -p 3001:3001 backend-app` in the backend folder.

Run the frontend application using npm start in the frontend folder.

Open your browser and go to http://localhost:3000 to see the app in action.

### Technologies and Tools
This project uses the following technologies and tools:

Name	Link	Description
* MongoDB: A NoSQL database to store the song data.
* ExpressJS: A web framework to handle the requests and responses for the backend.
* ReactJS: A library to build the user interface for the frontend.
* Node.js: A runtime environment to run JavaScript code on the server.
* Mongoose:	An ORM to interact with MongoDB, model the data and create the schema.
* Docker:	A platform to package the backend application using containers.
* TypeScript:	A superset of JavaScript that adds static typing and other features.
* Redux Toolkit: A toolkit to manage the state of the frontend application.
* Redux-Saga:	A middleware to make calls to the backend API from the frontend.
* Emotion: A library to style the frontend components using CSS-in-JS.
* Styled System:	A collection of functions to create responsive and themeable design systems.

## Features and Functionalities
This project has the following features and functionalities:

- Song List
The song list shows all the songs that are stored in the database. You can see the title, artist, album, and genre of each song. You can also sort the songs by any of these fields by clicking on the table headers. You can also search for a specific song by typing in the search box.

- Song Form
The song form lets you create a new song or update an existing song. You can enter the title, artist, album, and genre of the song. You can also select a color for the song from a color picker. The form validates the input and shows an error message if any field is empty or invalid.

- Song Statistics
The song statistics shows some data about the songs in the database. You can see the total number of songs, artists, albums, and genres. You can also see the number of songs in each genre, the number of songs and albums for each artist, and the number of songs in each album. You can also see a pie chart and a bar chart that visualize the data.
