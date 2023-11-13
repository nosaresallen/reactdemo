import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAVQX8B1bdki_LBj4X8qlauRCat9KCw9Dk",
    authDomain: "employees-58e7e.firebaseapp.com",
    projectId: "employees-58e7e",
    storageBucket: "employees-58e7e.appspot.com",
    messagingSenderId: "218835787778",
    appId: "1:218835787778:web:4a0a461ce274d4cabb071b",
    measurementId: "G-XBZ8PFJDQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;