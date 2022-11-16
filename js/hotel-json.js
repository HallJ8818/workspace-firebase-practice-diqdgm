/* Change the configuration */

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

// enter data in
$("input[type='button']").click(function (e) {
  //get the value of form
  var inputdata = $('form').serializeArray();
  var data = {};
  console.log(inputdata[2]);
  console.log(inputdata[2].name);
  console.log(inputdata[2].value);
  /* save the data to database */
  inputdata.forEach((entry) =>{
    console.log(entry);
    data[entry.name]=entry.value;
  });
  //console.log(data);
  firebase.firestore().collection("hotel").add(data);

  /* clear the entry */
  $('form')[0].reset();
});


/* array example
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
*/

/* read the data from the database */


firebase
  .firestore()
  .collection('hotel')
  .onSnapshot((querySnapshot) => {
    console.log(querySnapshot.size);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.data().room);
      console.log(doc.data().checkout);
    });
  });

