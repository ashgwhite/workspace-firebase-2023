// ***** Use your configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzzJz0lxJn9XV-jGo9x91sLcV-Q8ky7Yc",
  authDomain: "database2023project.firebaseapp.com",
  projectId: "database2023project",
  storageBucket: "database2023project.appspot.com",
  messagingSenderId: "382994926699",
  appId: "1:382994926699:web:673d62de6b68683ae8b52e",
  measurementId: "G-QPLL42Y96M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/* firebase.firestore().collection("test").orderBy("item").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().item}`);
  });
});
*/

// save the data
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from the form
  // You need to change this.
  var email = 'whiteag@usca.edu';
  var password = 'password';

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in successfully');
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        myname = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(myname, email, emailVerified);
        window.location.href = 'Surveyresult.html';
      }
    })
    .catch((error) => {

      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});

// add  a google login choice here 
$('#google').click(function(){
  var provider = new firebase.auth.GoogleAuthProvider();
  
  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    // The signed-in user info.
    var user = result.user;
    console.log("sign in through google", user);

  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

});