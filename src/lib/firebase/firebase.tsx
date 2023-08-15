import { initializeApp } from "firebase/app"
import { getFirestore, addDoc, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID
}

const firebase = initializeApp(firebaseConfig)
const firestore = getFirestore(firebase)

export const saveMessage = async ( email: string, message: string ) => {
  const collectionRef = collection(firestore, 'mastereloadingwebsitemessages')
  await addDoc(collectionRef, { email: email, message: message })
  return '200'
}