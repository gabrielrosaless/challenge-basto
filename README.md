# Challenge - Bastó

# Instructions

1. First of all you need to clone the project in any folder. 
\
`git clone https://github.com/gabrielrosaless/challenge-basto.git`

# Backend-Instructions

## Steps to run server application (backend).

2) Open a terminal in the folder of your cloned app and navigate to server folder.

    ### `cd .\challenge-basto\backend\`

3) Install backend dependences 
    ### `npm i`

4) Modify the .env file in the backend directory with your database parameters and port number (default is 4000) as follows or let it default:
```
MONGO_DATABASE=basto-database
MONGO_HOST=localhost
MONGO_PORT=27017
PORT=4000
```

4) Runs the app in the development mode :
   ### `npm start` (this use node)
    ### `npm run dev` (this use nodemon)

## Test with Jest and supertest:
To run unit testing run the follow comand:
   ### `npm run test`

# Front-end instructions

## Steps to run client application (frontend).

2) Open a terminal in this folder and navigate to folder app.
    ### `cd .\challenge-basto\frontend\challenge-basto\`

3) Install frontend dependences 
    ### `npm i`

4) Modify the .env file inside frontend\challenge-basto\ directory with API URL as follows, or let it default: 
```
REACT_APP_URL_API=http://localhost:4000/api/cows
```
* Important: the variable has to begin with 'REACT_APP_'

4) Runs the app in the development mode.\
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
   ### `npm start`

   The page will reload when you make changes.\
   You may also see any lint errors in the console.

