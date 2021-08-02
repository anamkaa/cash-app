var cashAmount = document.querySelector("#cash-amount");
var cashGiven = document.querySelector("#cash-given");
var btnCheck = document.querySelector("#btn-check");
var showMessage = document.querySelector("#show-message");
var noOfnote = document.querySelectorAll(".no-of-note");

var availableNotes = [2000,500,100,20,10,1];

btnCheck.addEventListener("click", validateCash);

function validateCash(){
    showMessage.style.display = "none";

    if(cashAmount.value>0){
        
        if(cashGiven.value>cashAmount.value|| cashGiven.value==cashAmount.value){
           
        //    net cash to be returned is calculated 
            var netCash = cashGiven.value - cashAmount.value;
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
    for(var i=0; i<availableNotes.length; i++){

        // calculating number of note of each denomination
        var numberOfNotes = Math.trunc(netCash/availableNotes[i]);

         netCash = netCash%availableNotes[i];

        noOfnote[i].innerText = numberOfNotes;
    }
}