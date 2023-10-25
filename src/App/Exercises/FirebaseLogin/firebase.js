import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

export const app = initializeApp(firebaseConfig); //dopisać export, bo bedziemy wykorzystywac tą appkę; importujemy ja do naszego komponentu z logowaniem/rejestracją