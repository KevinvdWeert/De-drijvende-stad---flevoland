document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Ensure navbar is visible
    const navbar = document.querySelector(".main-nav");
    if (navbar) {
        navbar.style.display = "flex"; // Ensure the navbar is displayed as a flex container
    }

    // Back to Top button functionality
    const backToTopButton = document.querySelector("#backToTop");
    if (backToTopButton) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add("visible");
            } else {
                backToTopButton.classList.remove("visible");
            }
        });

        backToTopButton.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Highlight active navbar item
    const navLinks = document.querySelectorAll(".nav-list a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.setAttribute("aria-current", "page");
        }
    });
});