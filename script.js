const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const btnCheck = document.querySelector("#btn-check");
const showMessage = document.querySelector("#show-message");
const noOfnote = document.querySelectorAll(".no-of-note");

const availableNotes = [2000,500,100,20,10,5,1];

btnCheck.addEventListener("click", validateCash);

function validateCash(){
    showMessage.style.display = "none";

    if(billAmount.value>0){
        
        if(cashGiven.value>billAmount.value || cashGiven.value===billAmount.value){
           
        //    net cash to be returned is calculated 
            const netCash = (cashGiven.value - billAmount.value);
           calculateCash(netCash);
        }

        else{
            showMessage.style.display ="block";
            showMessage.innerText = "Insufficient Amount Paid."
        }
    }

    else{
        showMessage.style.display = "block";
        showMessage.innerText = "Invalid Bill Amount";
    }

}

function calculateCash(netCash){

    // traverse through all the available notes
    for(let i=0; i<availableNotes.length; i++){

        // calculating number of note of each denomination
        const numberOfNotes = Math.trunc(netCash/availableNotes[i]);

         netCash = netCash%availableNotes[i];

        noOfnote[i].innerText = numberOfNotes;
    }
}