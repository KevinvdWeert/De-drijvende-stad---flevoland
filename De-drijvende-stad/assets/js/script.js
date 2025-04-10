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
    const navList = document.querySelector("#main-nav");
    const body = document.querySelector("body");

    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
            menuToggle.setAttribute("aria-expanded", !isExpanded);
            menuToggle.classList.toggle("open");
            navList.classList.toggle("visible");
            body.classList.toggle("menu-open");
        });
    }

    // Close menu when clicking outside the menu
    document.addEventListener("click", (event) => {
        if (navList && menuToggle && navList.classList.contains("visible") && !event.target.closest("#main-nav") && !event.target.closest("#menuToggle")) {
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.classList.remove("open");
            navList.classList.remove("visible");
            body.classList.remove("menu-open");
        }
    });

    // Prevent the above event from firing when clicking inside the menu
    navList.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    // Close menu with Escape key
    document.addEventListener("keydown", (e) => {
        if (navList && navList.classList.contains("visible") && e.key === "Escape") {
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.classList.remove("open");
            navList.classList.remove("visible");
            body.classList.remove("menu-open");
        }
    });

    // Close menu after clicking a link (mobile)
    const navLinks = document.querySelectorAll(".nav-list a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768 && navList && menuToggle) {
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.classList.remove("open");
                navList.classList.remove("visible");
                body.classList.remove("menu-open");
            }
        });
    });

    // Highlight active navbar item
    const navLinksAll = document.querySelectorAll(".nav-list a");
    navLinksAll.forEach(link => {
        if (link.href === window.location.href) {
            link.setAttribute("aria-current", "page");
        }
    });

    // Adjust fade-in effect for faster image loading
    document.querySelectorAll("img").forEach((img) => {
        img.style.opacity = "0";
        img.style.transition = "opacity 0.2s ease-in-out"; // Reduced duration
        img.addEventListener("load", () => {
            img.style.opacity = "1";
        });
    });
});