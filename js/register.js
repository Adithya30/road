  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB4wB9pplGaDzVcdcmpUmhbLvYkEToktqo",
    authDomain: "road-d06c3.firebaseapp.com",
    projectId: "road-d06c3",
    storageBucket: "road-d06c3.appspot.com",
    messagingSenderId: "583449408120",
    appId: "1:583449408120:web:f577269b594d34e064b38d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();



  //submit button
  const submit=document.getElementById('submit');
  submit.addEventListener("click" , function (event) {
  event.preventDefault()
    //inputs
    const email= document.getElementById('email').value;
    const password= document.getElementById('password').value;


createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating Account...")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
  })
