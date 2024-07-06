

document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Get form values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    let guests = document.getElementById('guests').value;
    let comments = document.getElementById('comments').value;
    
    // For demonstration, log the values
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Date:', date);
    console.log('Time:', time);
    console.log('Number of Guests:', guests);
    console.log('Comments:', comments);
    
    // You can add AJAX or fetch request here to submit the form data to the server
    // Example using fetch:
    /*
    fetch('url_to_your_server_endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            date: date,
            time: time,
            guests: guests,
            comments: comments
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Optionally, show a success message to the user
    })
    .catch((error) => {
        console.error('Error:', error);
        // Optionally, show an error message to the user
    });
    */
    
    // For this example, reset the form after submission
    this.reset();
});
