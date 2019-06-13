const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');

const firebaseApp = firebase.initializeApp(
    functions.config().firebase
);

const app = express();

var db = firebase.firestore();
var unitsRef = db.collection('units');

app.get('/api/units', async (req, res) => {
  try{
      let querySnapshot = await unitsRef.get();
      res.send(querySnapshot.docs.map(doc => doc.data()));
  } catch(err) {
      res.sendStatus(500);
  }
});

exports.app = functions.https.onRequest(app);
