const validator = require ('validator')

function validateUrl(userUrl) {
    console.log("::: Running checkForName :::", userUrl);  
    if(validator.isURL(userUrl)) {
        return true
    } else {
        alert = 'Please type a valid URL'
        return false
    }
}

export { validateUrl }
