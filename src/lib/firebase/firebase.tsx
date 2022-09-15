import { initializeApp } from "firebase/app"
import { getFirestore, getDocs, addDoc, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID
}

console.log('VERCEL:   ' + import.meta.env.VERCEL)
console.log('VERCEL_ENV:   ' + import.meta.env.VERCEL_ENV)
console.log('DEV:   ' + import.meta.env.DEV)

const firebase = initializeApp(firebaseConfig)
const firestore = getFirestore(firebase)

export const saveMessage = async ( message: string ) => {
  const collectionRef = collection(firestore, 'mastereloadingwebsitemessages')
  await addDoc(collectionRef, { message })

  const test = await getDocs(collectionRef)
  console.log(test.docs[0].data().message)

  return '200'
}