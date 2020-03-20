function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    const userUrl = document.getElementById('name').value
    Client.validateUrl(userUrl)

    console.log("::: Form Submitted :::")
    getSentiment(userUrl)
        .then(function (result) {
            document.getElementById('polarity').innerHTML = result.polarity
            document.getElementById('subjectivity').innerHTML = result.subjectivity
            document.getElementById('text').innerHTML = result.text
        })

}

function getSentiment(userUrl) {

    return fetch('http://localhost:8081/sentiment', {
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


