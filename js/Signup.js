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
$("#signup-form").submit(function(e) {
  e.preventDefault();
  // get the username(email) and password from the form
  // change the following code
  var em = document.getElementById("email").value;
  var pas = document.getElementById("password").value;

  var inputdata = $('form').serializeArray();
  var data = {};
  inputdata.forEach((entry) =>{
    data[entry.name]=entry.value;
  });
  firebase.firestore().collection("signup").add(data);
  $('form')[0].reset();

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(em, pas)
    .then(user => {
      // Signed in
      // ...

      console.log("You are signed up");
      window.location.href = "Login.html";
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});
