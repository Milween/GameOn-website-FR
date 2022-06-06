function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
  // Ajout de la fermeture du modal (x)
  // Ajout du sélecteur form
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll("#close");
const formElt = document.querySelectorAll("#form");

// Form Elements 
const firstElt = document.getElementById("first");
const lastElt = document.getElementById("last");
const quantityElt = document.getElementById("quantity");

// Events -----------


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeModalBtn.forEach(elt => elt.addEventListener("click", closeModal));

// Validation du form :
formElt.forEach(elt => elt.addEventListener("submit, validate"));

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
  const isFirstValid = isLongEnough(firstElt.value.length, 2) ? true : false;
  console.log(isFirstValid);
  const isLastValid = isLongEnough(lastElt.value.length, 2) ? true : false;
  console.log(isLastValid)

  function isLongEnough(currentLength, minimumLength) {
    return currentLength >= minimumLength ? true : false;
  }
}
