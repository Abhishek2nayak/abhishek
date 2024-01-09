import { initializeApp } from "firebase/app";
import {getFirestore,collection, getDocs} from 'firebase/firestore/lite'

const firebaseConfig = {
    apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "abhishek-026.firebaseapp.com",
    projectId:process.env.REACT_APP_PROJECTID,
    storageBucket: "abhishek-026.appspot.com",
    messagingSenderId: "74029838462",
    appId: process.env.REACT_APP_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const projectCollectionRef = collection(db,'projects');
const adminCollectionRef = collection(db,'admin');

//fetch the all projects details
export async function getProjects() {
    const querySnapshot = await getDocs(projectCollectionRef);
    const dataArr = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id : doc.id
    }))

    return dataArr;

}


export async function getProfile() {
    const querySnapshot = await getDocs(adminCollectionRef);
    const dataArr = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id : doc.id
    }))

    return dataArr;
  

}
