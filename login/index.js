// Your web app's Firebase configuration
var firebaseConfig = {
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

// Initialize variables
const auth = firebase.auth();
const database = firebase.database();

// Set up our register function
function register() {
  // Get all our input fields
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Invalid!');
    return;
    // Don't continue running the code
  }

  // Move on with Auth
  auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser;

      // Add this user to Firebase Database
      var database_ref = database.ref();

      // Create User data
      var user_data = {
        email: email,
        last_login: Date.now()
      };

      // Push to Firebase Database
      database_ref.child('users/' + user.uid).set(user_data);

      // Done
      alert('User Created!');
    })
    .catch(function(error) {
      // Firebase will use this to alert its errors
      var error_code = error.code;
      var error_message = error.message;

      alert(error_message);
    });
}

// Set up our login function
function login() {
  // Get all our input fields
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Invalid!');
    return;
    // Don't continue running the code
  }

  auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser;

      // Add this user to Firebase Database
      var database_ref = database.ref();

      // Create User data
      var user_data = {
        last_login: Date.now()
      };

      // Push to Firebase Database
      database_ref.child('users/' + user.uid).update(user_data);

      // Done
      alert('User Logged In!');
    })
    .catch(function(error) {
      // Firebase will use this to alert its errors
      var error_code = error.code;
      var error_message = error.message;

      alert(error_message);
    });
}

// Validate Functions
function validate_email(email) {
  var expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) == true) {
    // Email is good
    return true;
  } else {
    // Email is not good
    return false;
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password.length < 6) {
    return false;
  } else {
    return true;
  }
}

function validate_field(field) {
  if (field == null) {
    return false;
  }

  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
}

// Set up Google Sign-In
function googleSignIn() {
  var provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(function(result) {
      var user = result.user;
      // You can access user information like user.displayName, user.email, etc.
      // Add additional logic here if needed
      alert('User Signed In with Google!');
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
}

// Add event listener to input fields for Enter key
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

emailInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    login();
  }
});

passwordInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    login();
  }
});

// Call the initializeGoogleSignIn function once the window has loaded
window.onload = function() {
  initializeGoogleSignIn();
};