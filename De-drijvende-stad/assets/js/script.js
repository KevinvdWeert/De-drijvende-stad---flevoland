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

    // Mobile menu toggle
    const menuToggle = document.querySelector("#menuToggle");
    const navList = document.querySelector(".nav-list");
    menuToggle.addEventListener("click", () => {
        navList.classList.toggle("visible");
    });

    // Accessibility: Close menu with Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && navList.classList.contains("visible")) {
            navList.classList.remove("visible");
        }
    });

    // Highlight active navbar item
    const navLinks = document.querySelectorAll(".nav-list a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.setAttribute("aria-current", "page");
        }
    });
});