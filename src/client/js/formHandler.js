 function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/sentiment')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('polarity').innerHTML = 'Polarity: ' + res.polarity
        document.getElementById('subjectivity').innerHTML ='Subjectivity: ' + res.subjectivity
        document.getElementById('text').innerHTML = 'Text: ' + res.text
    })
}

export { handleSubmit }
