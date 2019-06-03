const express = require("express");
const bodyParser = require("body-parser");
const ctrl = require("./controllers");
const massive = require("massive");
const session = require("express-session");
// const passport = require('passport');
// const Auth0Strategy = require('passport-auth0');
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const {
  SESSION_SECRET,
  DOMAIN,
  CLIENT_ID,
  CLIENT_SECRET,
  CALLBACK_URL,
  CONNECTION_STRING
} = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db',db);
})

const app = express();
app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json());
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

//User
app.get('/api/host/:id', ctrl.getHost)
//Listing
app.get('/api/listing', ctrl.getAllListings)
app.get('/api/listing/:id', ctrl.getListingById)
app.get('/api/userlisting/:id', ctrl.getUserListings)
app.get('/api/preview/:id', ctrl.getListingPreview)
app.post('/api/listing', ctrl.createListing)
app.put('/api/listing/:id', ctrl.updateListing)
app.delete('/api/listing/:id', ctrl.deleteListing)



const port = 4000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})