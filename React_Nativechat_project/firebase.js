import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAseoM6gSUCL20KTtxhkCHXUhEt0sUOA-8",
  authDomain: "giftedchat-ed19f.firebaseapp.com",
  projectId: "giftedchat-ed19f",
  storageBucket: "giftedchat-ed19f.appspot.com",
  messagingSenderId: "253854883348",
  appId: "1:253854883348:web:f5d1ee178f3acb230f9101"
};

let app;
if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}

const db = app.firebase();
const auth = firebase.auth();
export { db, auth };