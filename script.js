// Function to validate registration forms
function validateRegistrationForm(type) {
    var formId = type + 'RegistrationForm';
    var name = document.getElementById(type + 'Name').value.trim();
    var email = document.getElementById(type + 'Email').value.trim();
    var password = document.getElementById(type + 'Password').value.trim();

    if (name === "" || email === "" || password === "") {
        alert("Please fill in all fields");
        return false;
    }

    // You can add more specific validation here if needed

    return true;
}

// Function to validate login forms
function validateLoginForm(type) {
    var formId = type + 'LoginForm';
    var email = document.getElementById(type + 'LoginEmail').value.trim();
    var password = document.getElementById(type + 'LoginPassword').value.trim();

    if (email === "" || password === "") {
        alert("Please fill in all fields");
        return false;
    }

    // You can add more specific validation here if needed

    return true;
}

// Event listeners for form submissions
document.getElementById('customerRegistrationForm').addEventListener('submit', function (event) {
    if (!validateRegistrationForm('customer')) {
        event.preventDefault();
    }
});

document.getElementById('agencyRegistrationForm').addEventListener('submit', function (event) {
    if (!validateRegistrationForm('agency')) {
        event.preventDefault();
    }
});

document.getElementById('customerLoginForm').addEventListener('submit', function (event) {
    if (!validateLoginForm('customer')) {
        event.preventDefault();
    }
});

document.getElementById('agencyLoginForm').addEventListener('submit', function (event) {
    if (!validateLoginForm('agency')) {
        event.preventDefault();
    }
});
