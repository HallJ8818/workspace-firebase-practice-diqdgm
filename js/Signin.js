var firebaseConfig = {
  apiKey: "AIzaSyBC8RZY7dcUF2OTpe8TF30QOUBjAVRaWKc",
  authDomain: "grocerylist-8b594.firebaseapp.com",
  projectId: "grocerylist-8b594",
  storageBucket: "grocerylist-8b594.appspot.com",
  messagingSenderId: "871764817573",
  appId: "1:871764817573:web:12fb4afd10b423a69a7f4c",
  measurementId: "G-YS8JY5WKP6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// save the data
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this.
  var email = $('#login').val();
  var password = $('#pwd').val();

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in');
      let user = firebase.auth().currentUser;
      window.location.href="Surveyresult.html";

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name + email + emailVerified);
      }
    })
    .catch((error) => {

      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});

$('#google').click(function(){
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log("Google user "+user.email+" Log in");
    // ...
  }).catch((error) => {
    console.log("Error Message "+error.message);
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
});

