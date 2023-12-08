// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
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

//global variable
var currentuser ="";
var currentemail = "";

//check if the user is logged in
firebase.auth().onAuthStateChanged((user)=>{
  if(user){
     currentuser = user.displayName;
     currentemail = user.email;
     console.log("Logged in " , currentuser, currentemail);
  }else{
    console("User is logged out");
    window.location.href = "Login.html";
  }
});

//sign out code 
$("#signout").click(function(){
  firebase.auth().signOut().then(()=>{
    console.log("user sign out");
    window.location.href = "index.html";
  }).catch((error)=>{
    console.log(error.message);
  });
});

// save the data
$(".sampleSurvey input[type='submit']").click(function(e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  



});

// update the result in table
