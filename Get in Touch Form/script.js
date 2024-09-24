// Function to validate the form
function validateForm(event) {
    event.preventDefault(); // Prevent form submission for validation

    // Get form input values
    const firstName = document.getElementById('fname').value.trim();
    const lastName = document.getElementById('lname').value.trim();
    const email = document.getElementById('mail').value.trim();
    const phone = document.getElementById('no').value.trim();
    const address = document.getElementById('address').value.trim();
    const message = document.getElementById('message').value.trim();

    // Regular expression for email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    // Regular expression for phone number validation (10 digits)
    const phonePattern = /^[0-9]{10}$/;

    // Check if first name is empty
    if (firstName === '') {
        alert('First Name is required');
        return false;
    }

    // Check if last name is empty
    if (lastName === '') {
        alert('Last Name is required');
        return false;
    }

    // Check if email is valid
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email');
        return false;
    }

    // Check if phone number is valid
    if (!phone.match(phonePattern)) {
        alert('Please enter a valid phone number (10 digits)');
        return false;
    }

    // Check if address is empty
    if (address === '') {
        alert('Address is required');
        return false;
    }

    // Check if message is empty
    if (message === '') {
        alert('Message is required');
        return false;
    }

    // If all validations pass, show success alert and reset the form
    alert('Form submitted successfully!');
    document.querySelector('form').reset(); // Reset form fields
    return true;
}

// Attach the validateForm function to the form submit event
document.querySelector('form').addEventListener('submit', validateForm);
