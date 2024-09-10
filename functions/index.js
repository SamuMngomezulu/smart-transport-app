// Remove unused variables or use them if needed
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// Example function
exports.helloWorld = functions.https.onRequest((req, res) => {
  res.send("Hello from Firebase!");
});
