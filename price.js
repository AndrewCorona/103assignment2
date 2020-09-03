var product = prompt("Enter the product name");
var quantity = prompt("Enter the quantity desired for order");
var price = prompt("Enter the price of the product, numerical only");
var final = quantity*price;
console.log(quantity + " of " + product + " will cost $" + final +" before taxes, and $" + (final*1.10) + " after the 10% state tax. ");