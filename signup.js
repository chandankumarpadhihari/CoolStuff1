function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
  
    if (username === '' || password === '') {
      errorMessage.textContent = 'Both fields are required!';
      errorMessage.style.display = 'block';
      return false;
    } else {
      errorMessage.style.display = 'none';
      alert('Login successful!');
      return true;
    }
  }
  
  // Function to validate form inputs
function validateForm() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Username validation
  if (!validateUsername(username)) {
      document.getElementById('usernameError').style.display = 'block';
      return false; // Prevent form submission
  } else {
      document.getElementById('usernameError').style.display = 'none';
  }
  
  // You can add more validations for password here
  return true; // If all validations pass
}

// Function to validate username
function validateUsername(username) {
  const usernameRegex = /^[a-zA-Z0-9]{3,20}$/; // Allows alphanumeric characters only, length between 3 and 20
  return usernameRegex.test(username);
}

// Add event listener for Forgot Password link
document.getElementById('forgotPasswordLink').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor click behavior

  // Prompt user for their email address
  const email = prompt("Please enter your email address to reset your password:");

  // Simple validation for email (you can make it more robust)
  if (email) {
      alert(`Instructions to reset your password have been sent to ${email}.`);
      // Here, you could implement logic to send an email with reset instructions
  } else {
      alert("Please enter a valid email address.");
  }
});
