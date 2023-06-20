// Your web app's Firebase configuration
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
const database = firebase.database();

function submitForm() {
 const name = document.getElementById('name').value;
 const phone = document.getElementById('phone').value;
 const address = document.getElementById('address').value;
 const parentName = document.getElementById('parent_name').value;
 const parentPhone = document.getElementById('parent_phone').value;
 const parentEmail = document.getElementById('parent_email').value;

 const userRef = database.ref('users').push();
 userRef.set({
   name: name,
   phone: phone,
   address: address,
   parent: {
     name: parentName,
     phone: parentPhone,
     email: parentEmail
   }
 });

 alert('User information submitted!');
 document.getElementById('name').value = '';
 document.getElementById('phone').value = '';
 document.getElementById('address').value = '';
 document.getElementById('parent_name').value = '';
 document.getElementById('.
