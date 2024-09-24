window.onload = function () {
    document.getElementById('button1').addEventListener('click', validateForm);

    function validateForm(event) {
        // Prevent form submission
        event.preventDefault();

        let isValid = true;
        let errorMessage = "";

        // Get form fields
        const email = document.querySelectorAll('input[type="text"]')[0].value;
        const repeatEmail = document.querySelectorAll('input[type="text"]')[1].value;
        const password = document.querySelector('input[type="password"]').value;
        const repeatPassword = document.querySelectorAll('input[type="text"]')[2].value;
        const name = document.querySelectorAll('input[type="text"]')[3].value;
        const phone = document.querySelector('input[type="tel"]').value;
        const country = document.querySelector('select').value;
        const termsAccepted = document.querySelectorAll('input[type="checkbox"]')[0].checked;

        // Email validation
        if (!validateEmail(email)) {
            errorMessage += "Please enter a valid email.\n";
            isValid = false;
        } else if (email !== repeatEmail) {
            errorMessage += "Emails do not match.\n";
            isValid = false;
        }

        // Password validation
        if (password.length < 6) {
            errorMessage += "Password should be at least 6 characters long.\n";
            isValid = false;
        } else if (password !== repeatPassword) {
            errorMessage += "Passwords do not match.\n";
            isValid = false;
        }

        // Name validation
        if (name === "") {
            errorMessage += "Name is required.\n";
            isValid = false;
        }

        // Phone number validation (basic check)
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            errorMessage += "Please enter a valid 10-digit phone number.\n";
            isValid = false;
        }

        // Country validation
        if (country === "") {
            errorMessage += "Please select your country.\n";
            isValid = false;
        }

        // Terms and privacy policy validation
        if (!termsAccepted) {
            errorMessage += "You must accept the Privacy Policy.\n";
            isValid = false;
        }

        // Display error or success message
        if (!isValid) {
            alert(errorMessage);
        } else {
            alert("Form submitted successfully!");
        }
    }

    // Function to validate email using regex
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
};
