// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth ,createUserWithEmailAndPassword} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB43V5iRwut8tVj7f-gT0ezjAGBKKIp7ac",
  authDomain: "ecom-com.firebaseapp.com",
  projectId: "ecom-com",
  storageBucket: "ecom-com.appspot.com",
  messagingSenderId: "173749008724",
  appId: "1:173749008724:web:14c974e278b8e59caaf0c1",
  measurementId: "G-9J2818ZD8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
export { auth, storage, db };

// apiKey: "AIzaSyA2iz-fB1JFAKHAcNo9EhKKp15F_Vq6QXY",
// authDomain: "ecom-37fa4.firebaseapp.com",
// projectId: "ecom-37fa4",
// storageBucket: "ecom-37fa4.appspot.com",
// messagingSenderId: "805897434320",
// appId: "1:805897434320:web:543a3d189dd84c604edad5",
// measurementId: "G-W7BZ2P1RVQ"