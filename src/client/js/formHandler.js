const fetch = require("node-fetch");

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    const userUrl = document.getElementById('name').value
    Client.validateUrl(userUrl)

    console.log("::: Form Submitted :::")
    getSentiment(userUrl)
        .then(function (result) {
            document.getElementById('polarity').innerHTML = 'Polarity: ' + result.polarity
            document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + result.subjectivity
            document.getElementById('text').innerHTML ='Text: ' + result.text
        })

}

function getSentiment(userUrl) {

    return fetch('http://localhost:3000/sentiment', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: userUrl })
    })
        .then(result => result.json())
}


export { handleSubmit,
        getSentiment };


