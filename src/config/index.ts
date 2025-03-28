import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB59jpJMGaEoAVzKTvu2F01pgTIMN_JM9M",
  authDomain: "green-shop-n17.firebaseapp.com",
  projectId: "green-shop-n17",
  storageBucket: "green-shop-n17.firebasestorage.app",
  messagingSenderId: "460303694284",
  appId: "1:460303694284:web:14f9aed9a146bb6c55c569",
  measurementId: "G-28FSB66250",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export { signInWithGoogle };
