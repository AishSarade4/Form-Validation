// Add event listeners for the Signup and Reset buttons
document.getElementById("btn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission for validation
    validateForm();
  });
  
  // Function to validate form
  function validateForm() {
    // Get form elements
    const fname = document.getElementById("fname").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const pswd = document.getElementById("pswd").value.trim();
    const confirmPswd = document.getElementById("confirm_pswd").value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const termsAccepted = document.getElementById("terms").checked;
  
    let errorMessage = "";
  
    // Validate first name
    if (fname === "") {
      errorMessage += "First name is required.\n";
    }
  
    // Validate phone number format
    const phoneRegex = /^\d{3}\d{3}\d{4}$/;
    if (!phone.match(phoneRegex)) {
      errorMessage += "Phone number must be in the format 000-000-0000.\n";
    }
  
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      errorMessage += "Please enter a valid email address.\n";
    }
  
    // Validate password
    if (pswd === "") {
      errorMessage += "Password is required.\n";
    }
  
    // Validate confirm password
    if (confirmPswd === "") {
      errorMessage += "Confirm password is required.\n";
    }
  
    // Check if passwords match
    if (pswd !== confirmPswd) {
      errorMessage += "Passwords do not match.\n";
    }
  
    // Validate terms and conditions
    if (!termsAccepted) {
      errorMessage += "You must accept the terms and conditions.\n";
    }
  
    // Show alert if there's an error, otherwise, submit form
    if (errorMessage !== "") {
      alert(errorMessage);
    } else {
      alert("Form submitted successfully!");
      resetForm(); // Reset the form after successful submission
    }
  }
  
  // Function to reset the form
  function resetForm() {
    // Clear all input fields
    document.getElementById("fname").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("pswd").value = "";
    document.getElementById("confirm_pswd").value = "";
    document.querySelector('input[type="email"]').value = "";
  
    // Uncheck checkboxes
    document.getElementById("terms").checked = false;
    document.querySelector('input[type="checkbox"]:not(#terms)').checked = false;
  
    // Optionally, reset any error messages or styles
    // alert can be removed if you don't want a confirmation on reset
  }
  