const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const nextSec = document.querySelector("#next-sec");
const btnNxt = document.querySelector("#nxt-btn");
const firstMessage = document.querySelector("#first-message");
const btnCheck = document.querySelector("#btn-check");
const showMessage = document.querySelector("#show-message");
const noOfnote = document.querySelectorAll(".no-of-note");

firstFunction();

const availableNotes = [2000,500,100,20,10,5,1];

btnNxt.addEventListener("click", showNextSection);

btnCheck.addEventListener("click", validateCash);

function firstFunction(){
    nextSec.style.display = "none";
}

function showNextSection(){

    firstMessage.style.display = "none";

    if(billAmount.value>0){
        nextSec.style.display = "block";
        btnNxt.style.display = "none";
    }

    else{
      firstMessage.style.display = "block";
      firstMessage.innerText = "Enter valid bill amount";
    }
    
}

function validateCash(){
    showMessage.style.display = "none";

    if(billAmount.value>0 && cashGiven.value>0){
        
        const netCash = Number(cashGiven.value - billAmount.value);

        if(cashGiven.value>billAmount.value || cashGiven.value===billAmount.value ) {
           
         calculateCash(netCash);
        }

        else{
            showMessage.style.display ="block";
            showMessage.innerText = "Insufficient Amount Paid."
        }
    }

    else{
        showMessage.style.display = "block";
        showMessage.innerText = "Invalid Cash Amount";
    }

}

function calculateCash(netCash){

    // traverse through all the available notes
    for(let i=0; i<availableNotes.length; i++){

        // calculating number of note of each denomination
        const numberOfNotes = Math.floor(netCash/availableNotes[i]);

         netCash = netCash - numberOfNotes * availableNotes[i];

        noOfnote[i].innerText = numberOfNotes;
    }
}