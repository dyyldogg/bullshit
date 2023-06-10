const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
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
  let lastName = document.querySelector(".lastName").value; // ///////////////////////////// Add variables here
  
  console.log(firstName, lastName);

  saveContactInfo(firstName, lastName); // ///////////////////////////// Add variables here

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(firstName, lastName) { // ///////////////////////////// Add variables here
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    firstName: firstName,
    lastName: lastName, // ///////////////////////////// Add variables here
  });
}
