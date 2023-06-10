import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set } from 'firebase/database';

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

const app = initializeApp(firebaseConfig);
const database = getDatabase();

// Reference messages collection
const messagesRef = ref(database, 'messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var firstName = getInputVal('firstName');
  var lastName = getInputVal('lastName');
  var age = getInputVal('age');
  var grade = getInputVal('grade');
  var ethnicity = getInputVal('ethnicity');
  var state = getInputVal('state');
  var zip = getInputVal('zip');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var unweightedGPA = getInputVal('unweightedGPA');
  var weightedGPA = getInputVal('weightedGPA');
  var satOption = document.getElementById('satOption').checked;
  var actOption = document.getElementById('actOption').checked;
  var satScore = getInputVal('satScore');
  var actScore = getInputVal('actScore');
  var scoreInput = getInputVal('scoreInput');

  // Save message
  saveMessage(firstName, lastName, age, grade, ethnicity, state, zip, email, phone, unweightedGPA, weightedGPA, satOption, actOption, satScore, actScore, scoreInput);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(firstName, lastName, age, grade, ethnicity, state, zip, email, phone, unweightedGPA, weightedGPA, satOption, actOption, satScore, actScore, scoreInput) {
  var newMessageRef = push(ref(database, 'messages'));
  set(newMessageRef, {
    firstName: firstName,
    lastName: lastName,
    age: age,
    grade: grade,
    ethnicity: ethnicity,
    state: state,
    zip: zip,
    email: email,
    phone: phone,
    unweightedGPA: unweightedGPA,
    weightedGPA: weightedGPA,
    satOption: satOption,
    actOption: actOption,
    satScore: satScore,
    actScore: actScore,
    scoreInput: scoreInput
  });
}
