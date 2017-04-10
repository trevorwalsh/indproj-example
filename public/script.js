/*    Project:  Hands-On Project 2-4
      Author: Trevor Walsh
      Date:   March 12, 2017
      Purpose:
*/ 
  
/* made array for the orders page */

var products = ["Nike t-shirt $19.99", "Sweatpants $24.99", "Cleats $89.99", "Golf Clubs $149.99"];

// declare labels variable
var labels = document.getElementsByTagName("label");

// create function to replace products
  function processProducts() {
    for (var i=0; i < 4; i++) {
      labels[i].innerHTML=products[i]; 
    }
}
if (window.addEventListener){
    window.addEventListener("load", processProducts, false);
  } else if (window.attachEvent) {
      window.attachEvent("onload", processProducts);
  }
  
 
// function to calculate total $

function calcTotal(){

  var itemTotal = 0
  var salesTaxRate = .06 // stores the sales rate
  var items = document.getElementsByTagName("input"); 
  
  for (var i=0; i<4; i++) { 
    if(items[i].checked){
      itemTotal += (items[i].value * 1);
    }
    }
  
  itemTotal *= 1+ salesTaxRate;
  document.getElementById("total").innerHTML = "Your order total is $" + itemTotal.toFixed(2); 
}
// calls the function
var submitButton = document.getElementById("sButton");
submitButton.addEventListener("click", calcTotal);
// insert submit button