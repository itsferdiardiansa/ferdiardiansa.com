import { getFirestore } from 'firebase/firestore'
import { firebaseApp } from '@/libs/firebase'

export default getFirestore(firebaseApp)
