const validator = require ('validator')

function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);  
    if(validator.isURL(inputText)) {
        alert("Welcome, Captain!")
    }
}

export { checkForName }
