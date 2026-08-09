// Initialize EmailJS
emailjs.init({
    publicKey: "AYnssouZHm2Ml29YQ",
});

const form = document.getElementById("contact-form");
const btnText = document.getElementById("btnText");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    btnText.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';

    const templateParams = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };

    emailjs
        .send("service_jrvmtqe", "template_n5dsvoc", templateParams)
        .then(() => {
            alert("✅ Your message has been sent successfully!");

            form.reset();

            btnText.innerHTML =
                'Send Message <i class="fas fa-paper-plane"></i>';
        })
        .catch((error) => {
            console.error("EmailJS Error:", error);

            alert("❌ Failed to send message. Please try again.");

            btnText.innerHTML =
                'Send Message <i class="fas fa-paper-plane"></i>';
        });
});