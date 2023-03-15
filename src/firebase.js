import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0OuXAlqFHs6-Ucfy1cQLqIt8eiFU42ZI",
  authDomain: "sist-info2023.firebaseapp.com",
  databaseURL: "https://sist-info2023-default-rtdb.firebaseio.com",
  projectId: "sist-info2023",
  storageBucket: "sist-info2023.appspot.com",
  messagingSenderId: "936011887572",
  appId: "1:936011887572:web:8d738f15cc9ed24b195c41",
  measurementId: "G-8Q5SQX1YBK"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()