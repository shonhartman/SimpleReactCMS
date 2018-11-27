import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyALDt2Scw9bTz1XftFVurcyG4Q4J5G9WVU",
    authDomain: "catch-of-the-day-shaun-hartman.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-shaun-hartman.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;