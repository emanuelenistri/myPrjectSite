import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
  projectId: 'myfiresite-88939',
  keyFilename: 'c:/Users/emanu/Documents/myfiresite-88939-ab83a8f33460.json',
});

const docRef = db.collection('users').doc('alovelace');
docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});

function myfiresite() {
  this.filters = {
    datain: '',
    datafi: '',
    tipo: ''
  };
}

  myfiresite.prototype.addRestaurant = function(docRef) {
  var collection = Firestore.firestore().collection('costi');
  return collection.add(docRef);
};

window.onload = function() {
  window.app = new myfiresite();
};