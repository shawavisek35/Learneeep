import firebase from "firebase"

var config = {
    apiKey: "AIzaSyBywDzA2U8IUvOLLXoOUnS3EuTWZYpt-P0",
    authDomain: "learneep-7108c.firebaseapp.com",
    databaseURL: "https://learneep-7108c.firebaseio.com",
    projectId: "learneep-7108c",
    storageBucket: "learneep-7108c.appspot.com",
    messagingSenderId: "86199420687",
    appId: "1:86199420687:web:400b1e5bd00ac3ab4d207a",
    measurementId: "G-XCD5XLJSN0"
};

const fire = firebase.initializeApp(config);

export default fire