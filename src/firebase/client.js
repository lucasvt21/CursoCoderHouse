import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyCfGyKSw556YacgWsK6lc9TmGv8gQhpT4c",
authDomain: "coder-housereact.firebaseapp.com",
projectId: "coder-housereact",
storageBucket: "coder-housereact.appspot.com",
messagingSenderId: "34690465668",
appId: "1:34690465668:web:04524adcdf1b8b4301e7d1",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
