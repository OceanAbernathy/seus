const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();

exports.createUserDocument = functions.auth.user().onCreate(async (user) => {
  const newUser = {
    uid: user.uid,
    email: user.email,
    personalInfo: {
      displayName: '',
    },
    preferences: {
      level: '',
      style: [],
    },
    lessons: [],
    achievements: [],
  };
  db.collection('users').doc(user.uid).set(newUser);
});
