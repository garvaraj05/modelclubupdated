// ===============================
// MOBILE MENU TOGGLE
// ===============================
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(el => {
        let windowHeight = window.innerHeight;
        let revealTop = el.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
});


// ===============================
// DOM CONTENT LOADED
// ===============================
document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll(".nav-links a");
    const currentPage = window.location.pathname.split("/").pop();

    // -------------------------------
    
    // -------------------------------
// HOVER BASED SLIDING INDICATOR
// -------------------------------

const indicator = document.querySelector(".nav-indicator");
const navContainer = document.querySelector(".nav-links");

function moveIndicator(link) {
    const containerRect = navContainer.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();

    indicator.style.left = (linkRect.left - containerRect.left) + "px";
    indicator.style.width = linkRect.width + "px";
    indicator.style.opacity = "1";
}

links.forEach(link => {
    link.addEventListener("mouseenter", function () {
        moveIndicator(this);
    });
});

// Hide indicator when mouse leaves navbar
navContainer.addEventListener("mouseleave", function () {
    indicator.style.opacity = "0";
});


    // -------------------------------
    // SMOOTH SCROLL FOR #SECTIONS
    // -------------------------------
    links.forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            // Only apply smooth scroll if it's a section link
            if (targetId.startsWith("#")) {

                e.preventDefault();

                const targetSection = document.querySelector(targetId);

                if (targetSection) {

                    const navbarHeight = document.querySelector(".navbar").offsetHeight;

                    window.scrollTo({
                        top: targetSection.offsetTop - navbarHeight - 20,
                        behavior: "smooth"
                    });

                    // Close mobile menu after click
                    document.getElementById('navLinks').classList.remove('active');
                }
            }

        });

    });

    // -------------------------------



});
