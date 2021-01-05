import firebase from 'firebase'
const firebaseConfig = {
apiKey: "AIzaSyCaFYNzN_slwIb2grX-uabQ5zBZaEogm8s",
authDomain: "tinder-clone-fec54.firebaseapp.com",
projectId: "tinder-clone-fec54",
storageBucket: "tinder-clone-fec54.appspot.com",
messagingSenderId: "605051186102",
appId: "1:605051186102:web:e11b60a5b0556d650e6f17",
measurementId: "G-5DN5TT71KV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const database = firebaseApp.firestore()

export default database