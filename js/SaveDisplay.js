// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

/*firebase.auth().onAuthStateChanged((user) => {
  if(user){
    console.log(user.email);
  } else{
    console.log('no user logged in');
    window.location.href = 'index.html';
  }
});

$('#signout').click(function(){
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location.href = 'index.html';
    })
    .catch((error) => {
      console.log(error.message);
    });
});*/

// save the data
$(".sampleSurvey input[type='submit']").click(function(e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  var inputdata = $('form').serializeArray();
  var data = {};

  inputdata.forEach((entry) =>{
    data[entry.name]=entry.value;
  });

  firebase.firestore().collection("surveydata").add(data);

  /* clear the entry */
  $('form')[0].reset();
});

// update the result in table
firebase.firestore().collection("surveydata").onSnapshot(function(querySnapShot){
  var n1 = 0; // how many A's
  var n2 = 0; // how many B's
  var n3 = 0; // how many C's
  var n4 = 0; // how many D's
  var n5 = 0; // how many E's
  querySnapShot.forEach(function(doc){
    console.log("document -- ", doc.data().choice);
    var s = doc.data().choice;
    switch(s){
      case "A": n1++; $('#ans1').text(n1);break;
      case "B": n2++; $('#ans2').text(n2);break;
      case "C": n3++; $('#ans3').text(n3);break;
      case "D": n4++; $('#ans4').text(n4);break;
      case "E": n5++; $('#ans5').text(n5);break;
    }

  });
  console.log("n1="+ n1 +" n2="+ n2 +" n3="+ n3 + " n4="+ n4 + " n5="+ n5)

});