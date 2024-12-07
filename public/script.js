// Script to handle form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Collect form data
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const service = document.querySelector('#service').value;
    const appointmentDate = document.querySelector('#appointment-date').value;
    const appointmentTime = document.querySelector('#appointment-time').value;
    const notes = document.querySelector('#notes').value;

    // Data to send to your Formspree endpoint
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('service', service);
    formData.append('appointmentDate', appointmentDate);
    formData.append('appointmentTime', appointmentTime);
    formData.append('notes', notes);

    // API endpoint (Formspree endpoint)
    const endpoint = 'https://formspree.io/f/xrbgvblq';

    // Send the data to Formspree using fetch
    fetch(endpoint, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json()) // Assuming the response is in JSON format
    .then(data => {
        console.log('Success:', data);
        // Optionally: Show a confirmation message to the user
        alert('Thank you for your booking! We will get back to you soon.');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error with your submission. Please try again later.');
    });
});
