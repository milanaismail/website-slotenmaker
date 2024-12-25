document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("yKs28puohglY5jBcj");

  const contactForm = document.getElementById("cs-form-265");
  const successModal = document.getElementById("successModal");
  const errorModal = document.getElementById("errorModal");
  const closeButtons = document.querySelectorAll(".close");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = new FormData(contactForm);

    // Convert FormData to an object
    const data = Object.fromEntries(formData.entries());

    // Send the email
    emailjs
      .send("service_fimb894", "template_v7vkpti", data)
      .then(() => {
        // Show success modal
        successModal.style.display = "block";
        contactForm.reset(); // Reset the form after submission
      })
      .catch((error) => {
        // Show error modal
        errorModal.style.display = "block";
        console.error("EmailJS Error:", error);
      });
  });

  // Close modals when the user clicks the close button
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      successModal.style.display = "none";
      errorModal.style.display = "none";
    });
  });

  // Close modals when the user clicks outside the modal content
  window.addEventListener("click", (e) => {
    if (e.target === successModal) {
      successModal.style.display = "none";
    }
    if (e.target === errorModal) {
      errorModal.style.display = "none";
    }
  });
});
