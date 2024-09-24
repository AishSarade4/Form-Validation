// Function to validate the login form
function validateLoginForm(event) {
    event.preventDefault(); // Prevent form submission for validation

    // Get form input values
    const username = document.querySelector('input[type="text"]').value.trim();
    const password = document.querySelector('input[type="password"]').value.trim();

    // Check if username is empty
    if (username === '') {
        alert('Username is required');
        return false;
    }

    // Check if password is empty
    if (password === '') {
        alert('Password is required');
        return false;
    }

    // If all validations pass, submit the form (add form submission logic here)
    alert('Login successful!');
    document.querySelector('form').reset(); // Clear form fields after submission
    return true;
}

// Attach the validateLoginForm function to the form submit event
document.querySelector('form').addEventListener('submit', validateLoginForm);
