// Wait until the page loads
document.addEventListener("DOMContentLoaded", () => {

    // Example: Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Example: New section button click
    const specialBtn = document.querySelector(".extra-section button");
    if (specialBtn) {
        specialBtn.addEventListener("click", () => {
            alert("You clicked the special section button!");
        });
    }

    // Example: Fade-in animation for new section when it comes into view
    const newSection = document.querySelector(".extra-section");
    if (newSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    newSection.classList.add("visible");
                }
            });
        }, { threshold: 0.3 });
        observer.observe(newSection);
    }

});
