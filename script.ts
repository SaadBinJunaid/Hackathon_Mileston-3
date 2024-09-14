// Select the form and output container elements
const form = document.getElementById('resumeForm') as HTMLFormElement;
const outputContainer = document.getElementById('resumeOutput') as HTMLDivElement;

// Add event listener to the form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Extract input values from the form fields
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('exprience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

  // Create the resume HTML string
  const resumeHTML = `
    <h2>Resume</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Experience</h3>
    <p>${experience}</p>
    <h3>Skills</h3>
    <p>${skills}</p>
  `;

  // Insert the resume HTML into the output container
  outputContainer.innerHTML = resumeHTML;
});