function validateForm() {
    const requiredFields = ["Last Name", "First Name", "Middle Name", "email", "Birth Date", "Student Number", "School Year", "Course", "ParentGuardian", "ContactNumber"];

    for (let field of requiredFields) {
      let value = document.forms["dataform"][field].value;
      if (value === "") {
        alert(`${field} is required!`);
        return false; 
    }
    }
    let agreeValue = document.querySelector('input[name="agree"]:checked');
    if (!agreeValue) {
      alert("Please agree to the terms!");
      return false; 
    }

    let confirmValue = document.querySelector('input[name="confirm"]:checked');
    if (!confirmValue) {
      alert("Please confirm contact history!");
      return false; 
    }

    alert("Form submitted successfully!");
    return true;
  }