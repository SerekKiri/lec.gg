import firebase from 'firebase'
import 'firebase/database'

const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
}

if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

export default firebase