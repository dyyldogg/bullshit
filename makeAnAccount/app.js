const firebaseConfig = {
    apiKey: "AIzaSyAIDrJ11LZoum8jtFwAdtqLXIrwnwWX0l4",
    authDomain: "insiderivy-a6d95.firebaseapp.com",
    databaseURL: "https://insiderivy-a6d95-default-rtdb.firebaseio.com",
    projectId: "insiderivy-a6d95",
    storageBucket: "insiderivy-a6d95.appspot.com",
    messagingSenderId: "69856689724",
    appId: "1:69856689724:web:d022e600f19702dd31cd39",
    measurementId: "G-18GL05TSXZ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Refernece contactInfo collections
  let contactInfo = firebase.database().ref("makeAnAccount");
  
  // Listen for a submit
  document.querySelector(".contact-form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    //   Get input Values
    let displayName = document.querySelector(".displayName").value;
    let email = document.querySelector(".email").value;
    let password = document.querySelector(".password").value;



  
        // ///////////////////////////// Add variables here
    
    console.log(displayName, email, password);
  
    saveContactInfo(displayName, email, password); // ///////////////////////////// Add variables here
  
    document.querySelector(".contact-form").reset();
  }
  
  // Save infos to Firebase
  function saveContactInfo(displayName, email, password) { // ///////////////////////////// Add variables here
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      displayName: displayName,
      email: email,
      password: password,
      // ///////////////////////////// Add variables here
    });
  }
  