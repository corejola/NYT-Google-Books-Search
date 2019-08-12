# New York Times Google Books Search App

Utilizing Week 20 Activity 07 - MERN, the NYT Google Books Search App allows a user to search books via the Google Books API. The user has the option to view the book, bring them to the book on Google Books or save the book the Mongo database.

Saved books are able to be viewed from the Mongo database. User may view the book or delete it, removing it from the database.

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.

## NPM Packages
1. React
2. React-DOM
3. React-Scripts
4. Concurrently
5. Express
6. if-env
7. nodemon

