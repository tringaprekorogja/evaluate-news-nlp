const validator = require ('validator')

function checkForName(urlt) {
    console.log("::: Running checkForName :::", urlt);  
    if(validator.isURL(urlt)) {
        alert("Welcome, Captain!")
    }
}

export { checkForName }
