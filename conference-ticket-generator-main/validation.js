document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            // Validate form fields
            if (validateForm()) {
                //fullname
                const fullName = document.getElementById("fullName").value;
                localStorage.setItem("userFullName", fullName);
                //email
                const email = document.getElementById("email").value;
                localStorage.setItem("userEmail", email);
                //github
                const github = document.getElementById("github").value;
                localStorage.setItem("githubUsername", github);
                // Redirect to ticket.html
                window.location.href = "ticket.html";
            }
        });

        // Real-time validation
        document.getElementById("fullName").addEventListener("input", validateFullName);
        document.getElementById("email").addEventListener("input", validateEmail);
        document.getElementById("github").addEventListener("input", validateGitHub);
    } else {
        console.error("Form with ID 'myForm' not found in the DOM.");
    }
});

function validateForm() {
    let isValid = true;

    if (!validateFullName()) isValid = false;
    if (!validateEmail()) isValid = false;
    if (!validateGitHub()) isValid = false;

    if (isValid) {
        alert("Form submitted successfully!");
    }

    return isValid;
}

function validateFullName() {
    const fullName = document.getElementById("fullName");
    if (/^[a-zA-Z]+ [a-zA-Z]+$/.test(fullName.value)) {
        setValid(fullName);
        return true;
    } else {
        setInvalid(fullName, "Please enter your full name (e.g., John Doe).");
        return false;
    }
}

function validateEmail() {
    const email = document.getElementById("email");
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        setValid(email);
        return true;
    } else {
        setInvalid(email, "Please enter a valid email address (e.g., example@domain.com).");
        return false;
    }
}

function validateGitHub() {
    const github = document.getElementById("github");
    if (/^[a-zA-Z0-9-]{3,39}$/.test(github.value)) {
        setValid(github);
        return true;
    } else {
        setInvalid(github, "Please enter a valid GitHub username (3-39 characters, no spaces).");
        return false;
    }
}

function setValid(input) {
    input.classList.remove("invalid");
    input.classList.add("valid");
}

function setInvalid(input, message) {
    input.classList.remove("valid");
    input.classList.add("invalid");
    console.warn(message); // Optional: Log validation message to the console
}