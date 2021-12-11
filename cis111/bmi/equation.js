"use strict"
//Mateo Campos

//Code to test the functionality of the JavaScript code
//window.alert("connected");

function calcBMI() {
//If and else statements used here to prevent invalid data from appearing

	if (document.getElementById("feet").value == "" || 
	document.getElementById("inches").value == "" || 
	document.getElementById("weight").value == ""){
	window.alert("Please enter your feet, inches, and weight!");
}

else{
		//Text box to type in the data for the Height (Feet)
		var feet = parseInt(document.getElementById("feet").value);
		console.log("feet are " + feet);

		//Text box to type in the data for the Height (Inches)
		var inches = parseInt(document.getElementById("inches").value);
		console.log("inches are " + inches);

		//Text box to type in the data for the Weight
		var weight = parseInt(document.getElementById("weight").value);
		console.log("weight is " + weight);

		//Calculates the total height from feet and inches
		let height = (feet * 12) + inches;
		console.log("height is " + height);

		//Calculating the BMI 
		var bmi = (weight * 703) / (height * height);
		console.log("bmi is " + bmi);

		//Displaying the BMI
		document.getElementById("bmi").innerHTML = bmi;
	}
	
}

//The display for pressing the clear button
function reset(){
	document.getElementById("feet").value = "";
	document.getElementById("inches").value = "";
	document.getElementById("weight").value = "";
	document.getElementById("bmi").innerHTML = "0";
}

