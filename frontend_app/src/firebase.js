// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt602aYJ9DPPL9RDw8foM1P-4sBEeni3w",
  authDomain: "health-pack-d3408.firebaseapp.com",
  databaseURL: "https://health-pack-d3408-default-rtdb.firebaseio.com",
  projectId: "health-pack-d3408",
  storageBucket: "health-pack-d3408.appspot.com",
  messagingSenderId: "225328605862",
  appId: "1:225328605862:web:50582f21ae65d4592aa267",
  measurementId: "G-DREHHQVT3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export function writeUserData(name, ID, date, mood, state, desc) {
    set(ref(database, 'Checkins'), {
      name: name,
      ID: ID, 
      date: date,
      mood: mood,
      physical_or_mental: state,
      description: desc
    });
}
  