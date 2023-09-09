import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBmCXvIpQEIlwhx8CEGjzLbeDyKAwylUrs",
    authDomain: "linkedin-clone-2bc06.firebaseapp.com",
    projectId: "linkedin-clone-2bc06",
    storageBucket: "linkedin-clone-2bc06.appspot.com",
    messagingSenderId: "375339294977",
    appId: "1:375339294977:web:7ad174a9d36a1754177b00"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  
  export {db, auth};