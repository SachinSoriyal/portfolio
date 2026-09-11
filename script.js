// ==========================
// Portfolio Website JavaScript
// ==========================

// Mobile Menu
const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close menu after clicking a link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Active Navigation Link
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// Fade-in Animation
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach(el => observer.observe(el));

// Typing Effect
const text = [
    "Frontend Developer",
    "CSE Student",
    "Python Learner",
    "Future Software Engineer"
];

let textIndex = 0;
let charIndex = 0;

const typingElement = document.querySelector("#typing");

function typeEffect() {
    if (!typingElement) return;

    if (charIndex < text[textIndex].length) {
        typingElement.textContent += text[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.textContent = text[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        textIndex++;

        if (textIndex >= text.length) {
            textIndex = 0;
        }

        setTimeout(typeEffect, 300);
    }
}

typeEffect();

// Footer Year
const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}