function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
  
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
  // Ajout de la fermeture du modal (x)
const closeModalBtn = document.querySelectorAll("#close");
  // Ajout du sélecteur form
const formElt = document.querySelectorAll("#form");
  // Ajout de la sélection de 'radio'
const cityElt = document.querySelectorAll('input[type=radio]');

// Form Elements 
const firstElt = document.getElementById("first");
const lastElt = document.getElementById("last");
const emailElt = document.getElementById("email");
const quantityElt = document.getElementById("quantity");
const birthdateElt = document.getElementById("birthdate");
  // Ajout de la sélection de 'checkbox'
const checkbox1Elt = document.getElementById('checkbox1');

// Events -----------


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeModalBtn.forEach(elt => elt.addEventListener("click", closeModal));

// Validation form :
formElt.forEach(elt => elt.addEventListener("submit, validate"));

// Ajout changements sur radio inputs
cityElt.forEach(elt => elt.addEventListener("change", isRadioChecked));

// Functions -----------

// launch modal form

function launchModal() {
  modalbg.style.display = "block";
}
// close modal form

function closeModal() {
  modalbg.style.display = "none";
}


// Validate form :

function validate (valide) {
  valide.preventDefault();
  
  const isFirstValid = isLongEnough(firstElt.value.length, 2);  
  const isLastValid = isLongEnough(lastElt.value.length, 2);
  const isEmailValid = isStringMatchEmailFormat(emailElt.value);
  console.log(isEmailValid);
  const isQuantityValid = isFilledWithNumber(quantityElt.value);
  console.log(isQuantityValid);
  const isCityValid = isRadioChecked();
  console.log(isCityValid);
  const isConditionsValid = isCheckboxChecked("checkbox1");
  console.log(isConditionsValid);
}

// vérifier si le format Email est correct 
function isStringMatchEmailFormat(str) {
  const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return mailFormat.test(str);
}

// Vérifier si c'est bien un nombre ou vide
function isFilledWithNumber(data) {
  return data != "" && !isNaN(data) ? true : false;
}

// Vérifier si une pastille ville est coché 
function isRadioChecked() {
  return document.querySelectorAll("input[type=radio]:checked").length > 0;
}

function isCheckboxChecked(id) {
  return document.getElementById(id).checked;
}




// Vérifier si la nombre de caractères est respecté :
function isLongEnough(currentLength, minimumLength) {
  return currentLength >= minimumLength ? true : false;
}