"use strict"

//The variables that will be used throughout the equation

let price = 0;
let total = 0;

//The user will input a weight of a package, with parseFloat
//allowing them to input a decimal.
const weight = parseFloat(prompt("Please enter the weight of the package"));
console.log("The weight of the package is " + weight);

//If the user does not put in a number, they will receive
//an error message shown at the bottom of the code.
if (!isNaN(weight)){

//The price of the package will be determined by the weight
	if (weight < 2.5){
			price = 3.50;
		}

	else if (weight > 5){
			price = 2.45;
		}

		else{
			price = 2.85;
		}
	console.log("The price is " + price + "per kg")

//The cost and the weight are combined to give the final total.
	total = (price * weight);
	console.log("The total price is " + total);

	let html ="<p>For a package weighing " + weight + " kg</p>";
		html += "<p>Cost per kg: $" + price.toFixed(2) + "</p>";
		html += "<p>Total shipping cost: $" + total.toFixed(2) + "</p>";
		html += "<p>Coded by Mateo Campos</p>";
		console.log(html);
		document.write(html);
}

else{
	document.write("<p>ERROR. Please input a number!</p>");
}

//Error message that will display if the user does not input a number