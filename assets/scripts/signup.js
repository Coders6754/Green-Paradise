import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAiwRTYbPsBZukrBa_PCJrz9yVly6bAAVQ",
    authDomain: "plant-site-aac81.firebaseapp.com",
    databaseURL: "https://plant-site-aac81-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "plant-site-aac81",
    storageBucket: "plant-site-aac81.appspot.com",
    messagingSenderId: "1029613642800",
    appId: "1:1029613642800:web:4b431fb4e9adb5ce2439f5"
};

const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();

// Manual Sign-Up
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('clicked');
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return set(ref(db, 'users/' + user.uid), {
                firstName,
                lastName,
                email,
            });
        })
        .then(() => {
            window.location.href = "login.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
});

// Google Sign-In
document.getElementById('googleSignIn').addEventListener('click', function (e) {
    e.preventDefault();
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            const fullName = user.displayName.split(' ');
            const firstName = fullName[0];
            const lastName = fullName[1] ? fullName[1] : '';
            set(ref(db, 'users/' + user.uid), {
                firstName: firstName,
                lastName: lastName,
                email: user.email,
            });
            window.location.href = "login.html"
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
});
