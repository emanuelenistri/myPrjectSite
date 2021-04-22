import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const admin = require('firebase-admin');

const serviceAccount = require('c:/Users/emanu/Documents/myfiresite-88939-ab83a8f33460.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const cityRef = db.collection('costi').doc('id');
const doc = cityRef.get();
if (!doc.exists) {
  console.log('No such document!');
} else {
  console.log('Document data:', doc.data());
}