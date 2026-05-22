var billInput   = document.getElementById("bill");
var tipInput    = document.getElementById("tip");
var peopleInput = document.getElementById("people");

billInput.addEventListener("input", calculate);
tipInput.addEventListener("input", calculate);
peopleInput.addEventListener("input", calculate);

function calculate() {
  var bill   = parseFloat(billInput.value);
  var tip    = parseFloat(tipInput.value);
  var people = parseInt(peopleInput.value);

  document.getElementById("bill-error").textContent   = "";
  document.getElementById("tip-error").textContent    = "";
  document.getElementById("people-error").textContent = "";

  var hasError = false;

  if (isNaN(bill) || bill < 0) {
    document.getElementById("bill-error").textContent = "Enter a valid bill amount.";
    hasError = true;
  }

  if (isNaN(tip) || tip < 0 || tip > 100) {
    document.getElementById("tip-error").textContent = "Enter a tip between 0 and 100.";
    hasError = true;
  }

  if (isNaN(people) || people < 1) {
    document.getElementById("people-error").textContent = "Enter at least 1 person.";
    hasError = true;
  }

  if (hasError) {
    document.getElementById("out-tip").textContent        = "Rs. 0.00";
    document.getElementById("out-total").textContent      = "Rs. 0.00";
    document.getElementById("out-per-person").textContent = "Rs. 0.00";
    return;
  }

  var tipAmount  = bill * (tip / 100);
  var total      = bill + tipAmount;
  var perPerson  = total / people;

  document.getElementById("out-tip").textContent        = "Rs. " + tipAmount.toFixed(2);
  document.getElementById("out-total").textContent      = "Rs. " + total.toFixed(2);
  document.getElementById("out-per-person").textContent = "Rs. " + perPerson.toFixed(2);
}

function resetAll() {
  billInput.value   = "";
  tipInput.value    = "";
  peopleInput.value = "1";

  document.getElementById("bill-error").textContent   = "";
  document.getElementById("tip-error").textContent    = "";
  document.getElementById("people-error").textContent = "";

  document.getElementById("out-tip").textContent        = "Rs. 0.00";
  document.getElementById("out-total").textContent      = "Rs. 0.00";
  document.getElementById("out-per-person").textContent = "Rs. 0.00";
}
