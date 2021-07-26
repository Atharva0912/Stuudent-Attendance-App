import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyA6EvxiN9-tKXJbsgS8dVvfEupEyxlOTdU',
  authDomain: 'project-60-867b7.firebaseapp.com',
  databaseURL: 'https://project-60-867b7-default-rtdb.firebaseio.com',
  projectId: 'project-60-867b7',
  storageBucket: 'project-60-867b7.appspot.com',
  messagingSenderId: '637193198873',
  appId: '1:637193198873:web:31ffbe426250b801cf3988',
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();