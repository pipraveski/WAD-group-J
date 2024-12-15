document.getElementById("signUpForm").addEventListener("submit", function (e) {
    // Get the textarea value
    const textarea = document.getElementById("passWord").value;
    const validationMessage = document.getElementById("validationMessage");
  
    // Clear previous messages
    validationMessage.textContent = "";
  
    // Validation rules
    const minLength = 8; // Minimum length
    const maxLength = 15; // Maximum length
    const containsNumber = /\d/; // Regex to check for numbers
    const containsUppercase = /[A-Z]/; // Regex to check for uppercase letters
    const startsWithUppercase = /^[A-Z]/; // Regex to check if it starts with an uppercase letter
    const containsUnderscore = /_/; // Regex for at least one underscore
  
    // Check length
    if (textarea.length < minLength || textarea.length > maxLength) {
        validationMessage.textContent = `Password must be between ${minLength} and ${maxLength} characters long.`;
        e.preventDefault(); // Stop form submission
        return;
    }
  
    // Check for numbers
    if (!containsNumber.test(textarea)) {
        validationMessage.textContent = "Password must contain at least one number.";
        e.preventDefault(); // Stop form submission
        return;
    }
  
    // Check for uppercase letters
    if (!containsUppercase.test(textarea)) {
        validationMessage.textContent = "Password must contain at least one uppercase letter.";
        e.preventDefault(); // Stop form submission
        return;
    }

    if (!startsWithUppercase.test(textarea)) {
        validationMessage.textContent = "Password must start with an uppercase letter.";
        e.preventDefault();
        return;
    }

    if (!containsUnderscore.test(textarea)) {
        validationMessage.textContent = "Password must contain at least one underscore _.";
        e.preventDefault();
        return;
    }
  
    // If all checks pass, allow form submission
  });