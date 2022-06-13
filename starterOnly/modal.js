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

//Ajout de la sélection 'fermeture du bouton success'
const successCloseBtnElt = document.querySelectorAll("#success-close-btn");

// Ajout du sélecteur form
const formElt = document.querySelectorAll("#form");

//ajout de la sélection 'sucess-message' :
const successMessageElt = document.querySelectorAll('#success-message');

// Form Elements 

const firstElt = document.getElementById("first");
const lastElt = document.getElementById("last");
const emailElt = document.getElementById("email");
const quantityElt = document.getElementById("quantity");
const birthdateElt = document.getElementById("birthdate");

// Ajout de la sélection de 'checkbox'
const checkbox1Elt = document.getElementById('checkbox1');

// Ajout de la sélection de 'radio'
const cityElt = document.querySelector('input[type=radio]');

// Regex : Trouver sur le net à voir avec Steeve.

const birthdateFormat = /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/;
const mailFormat = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const positiveIntegerFormat = /^\+?(0|[1-9]\d*)$/; 


// Events -----------


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeModalBtn.forEach(elt => elt.addEventListener("click", closeModal));

successCloseBtnElt.forEach(elt => elt.addEventListener("click", closeModal));

// Validation form :
formElt.forEach(elt => elt.addEventListener("submit", validate));




// Functions -----------


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  formElt[0].style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
  successMessageElt[0].style.display ="none";
}

// Display success message on the modal 

function displaySucessMessage() {
  let currentHeight = formElt[0].offsetHeight;

  formeElt[0].style.display = 'none';
  successMessageElt[0].style.display = 'flex';
  successMessageElt[0].style.height = currentHeight + 'px';
}

// Vérifier si Firstname est valide + feedback :

function isFirstValid() {

  let inputFirst = new InputElement(firstElt, "Veuillez entrer 2 caractères ou plus dans le champ 'prénom'.");
  let isValid = isLongEnough(firstElt.value.length, 2);
  removeDisplayError(unputFirst, isValid);

  return isValid;
}

// Vérifier si lastname est valide + feedback :

function isLastValid() {
  let inputLast = new InputElement(lastElt, "Veuillez entrer 2 caractères ou plus dans le champ 'nom'.");
  let isValid = isLongEnough(lastElt.value.length, 2);
  removeDisplayError(inputLast, isValid);  
 
  return isValid;
}

// Vérifier si email est valide + feedback :

function isEmailValid() {
  let inputEmail = new InputElement(emailElt, "Veuillez entrer un format d'email valide.");
  let isValid = isStringMatchEmailFormat(emailElt.value)
  removeDisplayError(inputEmail, isValid);

  return isValid;
}

// Vérifier si birthday est valide + feedback :
  
function isBirthdateValid () {
  let inputBirthdate = new InputElement(birthdayElt, "Veuillez saisir une date de naissance valide.");
  let isValid = isStringMatchRegexFormat(birthdateElt.value, birthdateFormat)
  removeDisplayError(inputBirthdate, isValid);
  
  return isValid;
}

// Vérifier si la quantity est valide + feedback : 

function isQuantityValid () {
  let inputQuantity = new InputElement(quantityElt, "Vous devez choisir une option.");
  let isValid = isStringMatchRegexFormat(quantityElt.value, positiveIntegerFormat);
  removeDisplayError(inputQuantity, isValid);
  
  return isValid;
}

// Vérifier si les buttons radio sont valides + feedback :

function isCityValid() {

let inputCity = new InputElement(cityElt, "Vous devez choisir une option.");
let isValid = isRadioChecked();
removeDisplayError (inputCity, isValid);

return isValid;
}

// Vérifier si les checkbox sont valides + feedback :

function isConditionsValid() {
  let inputConditions = new InputElement(checkbox1Elt, "Vous devez vérifier que vous  acceptez les termes et conditions.");
  let isValid = isCheckboxChecked("checkbox1");
  removeDisplayError(inputConditions, isValid);

  return isValid;
} 

// Montrer ou enlever le message d'erreur :

function removeDisplayError(elt, isValid) {
  isValid ? elt.removeDisplayError() : elt.displayError();
}


// Vérifier la validité de tout notre form :

function validate(valid) {
  valid.preventDefault();

  let first = isFirstValid();
  let last = isLastValid();
  let email = isEmailValid();
  let birthdate = isBirthdateValid();
  let quantity = isQuantityValid();
  let city = isCityValid();
  let conditions = isConditionsValid();

  let isFormValid = first && last && email && birthdate && quantity && city && conditions;

  if (isFormValid) displaySucessMessage();
}


// Vérifier EMail regex format :

function isStringMatchRegexFormat(str, strFormat) {
  return strFormat.test(str);
}


// Vérifier si c'est bien un nombre ou vide
function isFilledWithNumber(data) {
  return data != "" && !isNaN(data) ? true : false;
}

// Vérifier si les checkbox sont cochés 
function isCheckboxChecked(id) {
  return document.getElementById(id).checked;
}

// Vérifier si la nombre de caractères est respecté :
function isLongEnough(currentLength, minimumLength) {
  return currentLength >= minimumLength ? true : false;
}

// Montrer le messsage de réussite du formulaire :
function displaySucess() {
  formeElt[0].style.display = "none";
  successMessageElt[0].style.display = "block";
}