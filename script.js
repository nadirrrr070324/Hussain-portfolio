/* ========================================
   Portfolio Website - Scripts
   ======================================== */

document.addEventListener("DOMContentLoaded", () => {
    // ---- Configuration (replace with your own details) ----
    const CONFIG = {
        name: "Your Name",
        github: "https://github.com/YOUR_GITHUB_USERNAME",
        gmail: "mailto:YOUR_GMAIL@gmail.com",
        linkedin: "https://linkedin.com/in/YOUR_LINKEDIN_USERNAME",
        email: "YOUR_GMAIL@gmail.com",
    };

    // ---- Year in footer ----
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // ---- Typed name effect ----
    const typedNameEl = document.getElementById("typed-name");
    if (typedNameEl) {
        const name = CONFIG.name;
        let i = 0;
        typedNameEl.textContent = "";
        function type() {
            if (i < name.length) {
                typedNameEl.textContent += name.charAt(i);
                i++;
                setTimeout(type, 80);
            }
        }
        setTimeout(type, 500);
    }

    // ---- Navbar scroll effect ----
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // ---- Mobile navigation toggle ----
    const navToggle = document.getElementById("nav-toggle");
    const navLinks = document.getElementById("nav-links");

    if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("active");
            navToggle.setAttribute("aria-expanded", isOpen);
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll(".nav-link").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                navToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    // ---- Projects data ----
    const projects = [
        {
            title: "E-Commerce Dashboard",
            description: "A responsive admin dashboard for managing products, orders, and analytics with dark mode support.",
            tech: ["React", "Tailwind", "Chart.js"],
            link: "#",
        },
        {
            title: "Task Manager API",
            description: "RESTful API built with Node.js and Express featuring JWT authentication, validation, and MongoDB.",
            tech: ["Node.js", "Express", "MongoDB"],
            link: "#",
        },
        {
            title: "Weather App",
            description: "Real-time weather application using a public API with geolocation and 5-day forecast display.",
            tech: ["JavaScript", "API", "CSS"],
            link: "#",
        },
    ];

    // ---- Render project cards ----
    const projectsGrid = document.getElementById("projects-grid");
    if (projectsGrid) {
        projectsGrid.innerHTML = projects
            .map(
                (p) => `
            <article class="project-card">
                <div class="card-content">
                    <h3 class="card-title">${p.title}</h3>
                    <p class="card-desc">${p.description}</p>
                    <div class="card-tech">
                        ${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
                    </div>
                    <a href="${p.link}" class="btn btn-outline btn-sm">View Project</a>
                </div>
            </article>
        `
            )
            .join("");
    }

    // ---- Contact form handling ----
    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");
    const submitBtn = document.getElementById("submit-btn");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const name = formData.get("name");
            const email = formData.get("email");
            const subject = formData.get("subject");
            const message = formData.get("message");

            // Build a mailto link so the user can send via their own email client
            const mailtoLink = `${CONFIG.email}?subject=${encodeURIComponent(
                `Portfolio Contact: ${subject}`
            )}&body=${encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
            )}`;

            // Visual feedback
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = "Opening Email…";
            submitBtn.disabled = true;

            formMessage.textContent = "";
            formMessage.style.color = "";

            // Open default email client
            window.location.href = mailtoLink;

            // Reset button after a short delay
            setTimeout(() => {
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
                formMessage.style.color = "var(--success)";
                formMessage.textContent =
                    "✔ Your email client should have opened. Send the message to get in touch!";
            }, 1200);
        });
    }
});
    // ---- Active nav link on scroll ----
    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll(".nav-link");

    function setActiveLink() {
        const scrollPos = window.scrollY + 100;
        sections.forEach((section) => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute("id");
            if (scrollPos >= top && scrollPos < bottom) {
                navItems.forEach((item) => {
                    item.classList.remove("active");
                    if (item.getAttribute("href") === `#${id}`) {
                        item.classList.add("active");
                    }
                });
            }
        });
    }
    window.addEventListener("scroll", setActiveLink);
});