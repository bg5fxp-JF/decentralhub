// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: "decentralhub-17373.firebaseapp.com",
	projectId: "decentralhub-17373",
	storageBucket: "decentralhub-17373.appspot.com",
	messagingSenderId: "395250945675",
	appId: "1:395250945675:web:39ae90c09afec21137ce8e",
	measurementId: "G-772G39N8M0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
