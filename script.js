const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const nextSec = document.querySelector("#next-sec");
const btnNxt = document.querySelector("#nxt-btn");
const firstMessage = document.querySelector("#first-message");
const btnCheck = document.querySelector("#btn-check");
const showMessage = document.querySelector("#show-message");
const noOfnote = document.querySelectorAll(".no-of-note");
const rA = document.querySelector("#ra");

// firstFunction();

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
btnNxt.addEventListener("click", showNextSection);
btnCheck.addEventListener("click", validateCash);

// function firstFunction() {
//   nextSec.style.display = "none";
// }

function showNextSection() {
    // nextSec.style.display = "flex";
//   btnNxt.style.display = "none";
  firstMessage.style.display = "none";


  if (billAmount.value > 0) {
    nextSec.style.display = "flex";
    btnNxt.style.display = "none";
  } else {
    firstMessage.style.display = "block";
    firstMessage.innerText = "Enter valid bill amount";
  }
}

function validateCash() {
  showMessage.style.display = "none";

  console.log("billAmount: " + billAmount.value + ", cashGiven: " + cashGiven.value);

  if (billAmount.value > 0 && cashGiven.value > 0) {
    if (
        parseInt(cashGiven.value) > parseInt(billAmount.value) ||
        parseInt(cashGiven.value) === parseInt(billAmount.value)
    ) {
    const netCash = Number(parseInt(cashGiven.value) - parseInt(billAmount.value));
    console.log(netCash);
      calculateCash(netCash);
      
    } else {
      showMessage.style.display = "block";
      showMessage.innerText = "Insufficient Amount Paid.";
    }
  } else {
    showMessage.style.display = "block";
    showMessage.innerText = "Invalid Cash Amount";
  }
}

function calculateCash(netCash) {
    rA.innerText = netCash;

  // traverse through all the available notes
  for (let i = 0; i < availableNotes.length; i++) {
    // calculating number of note of each denomination
    const numberOfNotes = Math.floor(netCash / availableNotes[i]);

    netCash = netCash - numberOfNotes * availableNotes[i];

    noOfnote[i].innerText = numberOfNotes;
  }
}
