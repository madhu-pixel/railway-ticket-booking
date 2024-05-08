// JavaScript for form validation
function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please re-enter your password.");
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}
<script>
function handleFormSubmission() {
    // Perform form validation here if needed
    alert("Form submitted successfully! Redirecting...");

    // Redirect to the next page
    setTimeout(function() { // Optional delay to simulate processing
        window.location.href = "file:///C:/Users/Admin/OneDrive/Desktop/project%20final/ticketbookingp-page.html"; // Redirect to target page
    }, 1000); // 1-second delay (adjust as needed)

    return false; // Prevent default form submission to use custom logic
}
</script>
