// Example: Display an alert when a button is clicked
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#alertButton");

    if (button) {
        button.addEventListener("click", () => {
            alert("Welkom bij De Drijvende Stad!");
        });
    }

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Back to Top button functionality
    const backToTopButton = document.querySelector("#backToTop");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});