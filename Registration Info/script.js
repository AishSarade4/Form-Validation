function validateForm() {
    let fname = document.getElementById('fname').value;
    let birthdate = document.getElementById('birthdate').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
 
    if (fname === "" || birthdate === ""||email === "" || phone === "" )
        {
            alert("Please fill in all fields");
        }
        alert("Form submitted!");     
    }

function resetForm() {
    alert("Form has been reset!");
}