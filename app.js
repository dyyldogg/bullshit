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
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let firstName = document.querySelector(".firstName").value;
  let lastName = document.querySelector(".lastName").value;
  let age = document.querySelector(".age").value;
  let grade = document.querySelector(".grade").value;
  let ethnicity = document.querySelector(".ethnicity").value;
  let state = document.querySelector(".state").value;
  let zip = document.querySelector(".zip").value; 
  let email = document.querySelector(".email").value; 
  let phone = document.querySelector(".phone").value; 
  
  let unweightedGPA = document.querySelector(".unweightedGPA").value; 
  let weightedGPA = document.querySelector(".weightedGPA").value;
  let actScore = document.querySelector(".actScore").value;
  let satScore = document.querySelector(".satScore").value;

      // ///////////////////////////// Add variables here
  
  console.log(firstName, lastName, age, grade, ethnicity, state, zip, email, phone, unweightedGPA, weightedGPA, actScore, satScore);

  saveContactInfo(firstName, lastName, age, grade, ethnicity, state, zip, email, phone, unweightedGPA, weightedGPA, actScore, satScore); // ///////////////////////////// Add variables here

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(firstName, lastName, age, grade, ethnicity, state, zip, email, phone, unweightedGPA, weightedGPA, actScore, satScore) { // ///////////////////////////// Add variables here
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
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
    actScore: actScore,
    satScore: satScore, // ///////////////////////////// Add variables here
  });
}
