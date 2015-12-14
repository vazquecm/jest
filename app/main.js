// console.log("hey hey hey hey");

var validateButton = document.getElementById("validateButton");

function fullValidation(){
	var valueOfText = document.getElementById("myText").value;

	//validate alphaNumeric duplicates, and word count
	if(module.exports.verifyAlphaNumeric(valueOfText) === false && module.exports.checkWordCount(valueOfText) && module.exports.duplicateCheck(valueOfText)){

		console.log("Text is validated! YES");

	} else {
		
		console.log("test is not validated");
	}

	

	
}

validateButton.addEventListener("click", fullValidation);