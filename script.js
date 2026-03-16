document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS
  emailjs.init("soHRjbYJkxnERD193"); // your public key

  const form = document.getElementById("contact-form");
  const status = document.getElementById("status");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // STOP page refresh

    status.innerHTML = "Sending...";
    status.style.color = "black";

    emailjs.sendForm(
      "service_z57kfbr",  // your service ID
      "template_98hhb58", // your template ID
      form                 // form element
    )
    .then(() => {
      status.innerHTML = "✅ Message sent successfully!";
      status.style.color = "green";
      form.reset();
    })
    .catch((err) => {
      console.error(err);
      status.innerHTML = "❌ Message failed! Please try again.";
      status.style.color = "red";
    });
  });
});