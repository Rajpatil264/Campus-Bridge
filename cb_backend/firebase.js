const admin = require("firebase-admin");

const serviceAccount = require("./service_account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cb-backend-90a12.firebaseio.com",
});

const db = admin.firestore();

module.exports = db;
