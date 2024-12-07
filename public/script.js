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

    // Example of displaying form data in the console (you can use an API to submit this data)
    console.log('Form Submitted:', { name, email, phone, service, appointmentDate, appointmentTime, notes });

    // Optionally: Show a confirmation message to the user
    alert('Thank you for your booking! We will get back to you soon.');
});
