import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyCijK5LPBYSCB7AR2i4bUiJJUU1oFELvME",
  authDomain: "fsd-85b9f.firebaseapp.com",
  projectId: "fsd-85b9f",
  storageBucket: "fsd-85b9f.firebasestorage.app",
  messagingSenderId: "605939536906",
  appId: "1:605939536906:web:b4c768b5febb0920327bf3",
  measurementId: "G-LLHX9SBJ6E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
