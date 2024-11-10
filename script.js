var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Get references to form elements using their IDs
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Profile Picture setup
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        // Create resume output
        var resumeOutput = "\n        <h1>Resume</h1>\n             </br>\n            ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n            </br>\n          <p class=\"contact-info\"><strong>Name:</strong> <span class=\"user-input\">").concat(name_1, "</span></p>\n        <p class=\"contact-info\"><strong>Email:</strong> <span class=\"user-input\">").concat(email, "</span></p>\n        <p class=\"contact-info\"><strong>Phone Number:</strong> <span class=\"user-input\">").concat(phone, "</span></p>\n        <br>\n\n        <h3>Education</h3>\n        <p><span class=\"education-output\">").concat(education, "</span></p>\n\n        <h3>Work Experience</h3>\n        <p><span class=\"experience-output\">").concat(experience, "</span></p>\n\n        <h3>Skills</h3>\n        <p><span class=\"skills-output\">").concat(skills, "</span></p>\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output element is missing');
        }
    }
    else {
        console.error('One or more form elements are missing');
    }
});