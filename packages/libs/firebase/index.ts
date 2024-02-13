/**
 * `oxcyn-firebase` a shared lib for oxcyn-apps
 */
import { initializeApp, getApps } from 'firebase/app'
import { initializeFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SEND_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}

// Initialize Firebase
let app

if (getApps().length) {
  app = getApps()[0]
} else {
  app = initializeApp(firebaseConfig)
}

/**
 * Create a firebaseApp with a conditional if there's no existing app then it will initialize a new app
 * otherwise just reuse the existing app
 *
 * @returns FirebaseApp
 *
 */
export const firebaseApp = app

/**
 * Create a variable that contains a default Firestore
 *
 * Returns the existing default Firestore instance that is associated with the provided @firebase/app#FirebaseApp.
 * If no instance exists, initializes a new instance with default settings.
 *
 * @returns Firestore
 */
export const db = initializeFirestore(firebaseApp, {
  experimentalAutoDetectLongPolling: true,
})

export { getDocumentCollections } from './firestore/document'
