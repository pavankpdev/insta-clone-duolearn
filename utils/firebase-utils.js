import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from "firebase/firestore";

import { auth, db } from "../lib/firebase";

export const createUser = (user) => {
    return createUserWithEmailAndPassword(auth, user.email, user.password)
}

export const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const createUserInFirestore = async (uid, fullname, username) => {
    const userRef = doc(db, 'users', uid)
    await setDoc(userRef, {
        fullname,
        username,
    })
}
