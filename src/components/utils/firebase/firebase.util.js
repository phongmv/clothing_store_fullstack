import {initializeApp} from 'firebase/app';
import {GoogleAuthProvider, signInWithPopup, signInWithRedirect, getAuth} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2j2K0JLjv0CoeZfKjN1jEcrM7fz9UjKg",
    authDomain: "cwrn-clothing-f2e25.firebaseapp.com",
    projectId: "cwrn-clothing-f2e25",
    storageBucket: "cwrn-clothing-f2e25.appspot.com",
    messagingSenderId: "736399081533",
    appId: "1:736399081533:web:ae59878b5743505cb7ea54",
    measurementId: "G-F52NNV0H72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
provider.setCustomParameters({
    prompt: "select_account"
})

const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()
const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
}