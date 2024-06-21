// love.js

function submitResponse(response) {
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ response: response })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        alert('Response submitted successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while submitting your response.');
    });
}
