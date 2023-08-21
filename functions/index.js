/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// import * as functions from 'firebase-functions';
// import * as admin from 'firebase-admin';

// const { functions } = require('firebase-functions');
// const { admin } = require('firebase-admin');

// admin.initializeApp();
// const db = admin.firestore();

// exports.createUserDocument = functions.auth.user().onCreate(async (user) => {
//   const newUser = {
//     uid: user.uid,
//     email: user.email,
//     displayName: user.displayName,
//     providerData: user.providerData,
//   };
//   db.collection('users').doc(user.uid).set(newUser);
// });

// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// admin.initializeApp();
// const express = require('express');
// const cookieParser = require('cookie-parser')();
// const cors = require('cors')({origin: true});
// const app = express();

// // See https://github.com/firebase/functions-samples/blob/Node-8/authorized-https-endpoint/functions/index.js
// const validateFirebaseIdToken = require('./validateFirebaseIdToken');

// app.use(cors);
// app.use(cookieParser);
// app.use(validateFirebaseIdToken);
// app.get('/createUser', (req, res) => {

//   const userData = req.params;

//   // This represents some criteria you set for determining who can call this endpoint
//   // possible a list of approved uids in your database?
//   if( req.user.uid !== VALID_ADMIN_USER ) {
//     res.status(401).send('Unauthorized');
//     return;
//   }

//   // See https://firebase.google.com/docs/auth/admin/manage-users#create_a_user

//   admin.auth().createUser({
//     email: userData.email,
//     displayName: userData.name, ... })
//     .then(function(userRecord) {
//       // See the UserRecord reference doc for the contents of userRecord.
//       res.json({result: 'success', uid: userRecord.uid});
//       console.log("Successfully created new user:", userRecord.uid);
//     })
//     .catch(function(error) {
//       console.error("Failed to create new user");
//       console.error(error);
//       res.status(500).json({status: 'error', error: 'Unable to process the request'});
//     });

// });

// // This HTTPS endpoint can only be accessed by your Firebase Users.
// // Requests need to be authorized by providing an `Authorization` HTTP header
// // with value `Bearer <Firebase ID Token>`.
// exports.app = functions.https.onRequest(app);

// const functions = require('firebase-functions');

// module.exports = {
//   hello: functions.https.onRequest((req, res) => {
//     const subject = req.query.subject || 'World';
//     res.send(`Hello ${subject}!`);
//   }),
// };

const functions = require('firebase-functions');

exports.hello = functions.https.onRequest((req, res) => {
  const subject = req.query.subject || 'World';
  res.send(`Hello ${subject}!`);
});
