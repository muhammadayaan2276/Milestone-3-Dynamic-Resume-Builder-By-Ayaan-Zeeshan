document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get references to form elements using their IDs
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const phoneElement = document.getElementById('phone');
    const educationElement = document.getElementById('education');
    const experienceElement = document.getElementById('experience');
    const skillsElement = document.getElementById('skills');

    if ( profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {

        const name = (nameElement as HTMLInputElement).value;
        const email = (emailElement as HTMLInputElement).value;
        const phone = (phoneElement as HTMLInputElement).value;
        const education = (educationElement as HTMLInputElement).value;
        const experience = (experienceElement as HTMLInputElement).value;
        const skills = (skillsElement as HTMLInputElement).value;

         // Profile Picture setup
         const profilePictureFile = profilePictureInput.files?.[0];
         const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

        // Create resume output
        const resumeOutput = `
        <h1>Resume</h1>
             </br>
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
            </br>
          <p class="contact-info"><strong>Name:</strong> <span class="user-input">${name}</span></p>
        <p class="contact-info"><strong>Email:</strong> <span class="user-input">${email}</span></p>
        <p class="contact-info"><strong>Phone Number:</strong> <span class="user-input">${phone}</span></p>
        <br>

        <h3>Education</h3>
        <p><span class="education-output">${education}</span></p>

        <h3>Work Experience</h3>
        <p><span class="experience-output">${experience}</span></p>

        <h3>Skills</h3>
        <p><span class="skills-output">${skills}</span></p>
        `;

        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error('The resume output element is missing');
        }
    } else {
        console.error('One or more form elements are missing');
    }
});