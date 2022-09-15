import { initializeApp } from "firebase/app"
import { getFirestore, addDoc, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  projectId: process.env.FIREBASE_PROJECTID
}

const firebase = initializeApp(firebaseConfig)
const firestore = getFirestore(firebase)

export const saveMessage = async ( message: string ) => {
  const collectionRef = collection(firestore, 'mastereloadingwebsitemessages')
  await addDoc(collectionRef, { message })

  return '200'
}