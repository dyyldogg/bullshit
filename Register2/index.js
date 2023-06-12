document.addEventListener('DOMContentLoaded', function() {
    // Initialize Firebase
    const firebaseConfig = {
      // Your Firebase configuration here
      apiKey: "AIzaSyAIDrJ11LZoum8jtFwAdtqLXIrwnwWX0l4",
      authDomain: "insiderivy-a6d95.firebaseapp.com",
      databaseURL: "https://insiderivy-a6d95-default-rtdb.firebaseio.com",
      projectId: "insiderivy-a6d95",
      storageBucket: "insiderivy-a6d95.appspot.com",
      messagingSenderId: "69856689724",
      appId: "1:69856689724:web:d022e600f19702dd31cd39",
      measurementId: "G-18GL05TSXZ"
    };
  
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const database = firebase.database();
  
    // Register button event listener
    const registerButton = document.getElementById('registerButton');
    registerButton.addEventListener('click', register);
  
    // Register function
    function register(event) {
      event.preventDefault(); // Prevent form submission
      // Get input field values
      const displayName = document.getElementById('displayName').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      // Validate password
      if (password.length < 6) {
        alert('Password must be longer than six characters.');
        return;
      }
  
      // Move on with authentication
      auth.createUserWithEmailAndPassword(email, password)
        .then(function() {
          var user = auth.currentUser;
          // Add this user to the Firebase database
          var database_ref = database.ref();
          // Create user data
          var user_data = {
            displayName: displayName,
            email: email,
            last_login: Date.now()
          };
          database_ref.child('users/' + user.uid).set(user_data);
          alert('User Created');
        })
        .catch(function(error) {
          // Firebase will tell you if there is an error
          var error_code = error.code;
          var error_message = error.message;
          alert(error_message);
        });
    }
  });
  