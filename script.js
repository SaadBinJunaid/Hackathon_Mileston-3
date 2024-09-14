// Select the form and output container elements
var form = document.getElementById('resumeForm');
var outputContainer = document.getElementById('resumeOutput');
// Add event listener to the form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Extract input values from the form fields
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('exprience').value;
    var skills = document.getElementById('skills').value;
    // Create the resume HTML string
    var resumeHTML = "\n    <h2>Resume</h2>\n    <p><strong>Name:</strong> ".concat(name, "</p>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Phone:</strong> ").concat(phone, "</p>\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n  ");
    // Insert the resume HTML into the output container
    outputContainer.innerHTML = resumeHTML;
});
