import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {  
        apiKey: "AIzaSyAIICdx4gVz5uh5ZgfVuxyoJskCVxBLhiY",
        authDomain: "fir-pj-f7344.firebaseapp.com",
        projectId: "fir-pj-f7344",
        storageBucket: "fir-pj-f7344.appspot.com",
        messagingSenderId: "537581870356",
        appId: "1:537581870356:web:e38838d1ea249839b53601",
        measurementId: "G-RKLVPWYT3Z"
    }
  )
}

export default firebase