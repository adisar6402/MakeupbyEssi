// script.js

// Function to handle form submission
document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.querySelector('form[name="booking-form"]');

    bookingForm.addEventListener('submit', function (event) {
        event.preventDefault();  // Prevent form from submitting immediately

        // Validate form fields
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const service = document.getElementById('service');
        const appointmentDate = document.getElementById('appointment-date');
        const appointmentTime = document.getElementById('appointment-time');
        
        if (!name.value || !email.value || !phone.value || !service.value || !appointmentDate.value || !appointmentTime.value) {
            alert("Please fill in all required fields.");
            return;  // Stop form submission if validation fails
        }

        // You can add custom validations here if needed

        // Submit form to Netlify form handling
        bookingForm.submit();  // Proceed with form submission after validation
    });
});
