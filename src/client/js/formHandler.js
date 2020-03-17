 function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    const urlt = document.getElementById('name').value
    Client.checkForName(urlt)

    console.log("::: Form Submitted :::")
    postData('http://localhost:8081/sentiment', {url: urlt})
    .then(function (data) {
    document.getElementById('polarity').innerHTML = data.polarity
    document.getElementById('subjectivity').innerHTML = data.subjectivity
    document.getElementById('text').innerHTML = data.text
    })
    
}
const postData = async (url = '', data = {}) => {
    console.log('I am the data' + data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log('une jam' + newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}

export { handleSubmit }
