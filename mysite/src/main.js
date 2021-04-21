import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const admin = require('firebase-admin');

const serviceAccount = require('../src/myfiresite-88939-913d2ec95558.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const docRef = db.collection('users').doc('alovelace');

docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});