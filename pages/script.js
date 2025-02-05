document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
    
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Contact Form Submission (Mock)
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("responseMessage").textContent = "Thank you for reaching out! I'll get back to you soon.";
        document.getElementById("contactForm").reset();
    });
});
