import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD48heFhnvT9u4Zjv4RCom4hDjFbZeAN4A",
  authDomain: "apptask-45f9b.firebaseapp.com",
  projectId: "apptask-45f9b",
  storageBucket: "apptask-45f9b.appspot.com",
  messagingSenderId: "511139067400",
  appId: "1:511139067400:web:df0dd627331bdbead943bd"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};