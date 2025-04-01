window.onload = function() {
    // Get the current page's full URL path (e.g., '/home.html', '/about.html')
    var currentPath = window.location.pathname;

    // Ensure no trailing slash
    if (currentPath.endsWith('/')) {
        currentPath = currentPath.slice(0, -1);
    }

    // Remove any query strings or hash fragments
    currentPath = currentPath.split('?')[0].split('#')[0];
    
    console.log("Current Path: " + currentPath);  // Debug: Log current path without query/hash

    // Get all the navbar links
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Loop through each nav link
    navLinks.forEach(function(link) {
        // Get the href attribute of each link
        var linkHref = link.href;
        var linkPath = new URL(link.href).pathname;

        // Normalize the link path to ensure no trailing slash is included
        if (linkPath.endsWith('/')) {
            linkPath = linkPath.slice(0, -1);
        }

        // Remove any query strings or hash fragments from the link path
        linkPath = linkPath.split('?')[0].split('#')[0];

        console.log("Link Href: " + linkHref);  // Debug: Log the full link URL
        console.log("Link Path: " + linkPath);  // Debug: Log the cleaned-up link path

        // Debugging: Log comparison of currentPath and linkPath
        console.log("Comparing: ", currentPath, " vs ", linkPath);

        // If the link's pathname matches the current path, add 'active' class
        if (linkPath === currentPath) {
            link.classList.add('active');
            console.log("Active class added to: " + link.innerText);  // Debug: Log which link gets active
        }
    });
};


document.addEventListener("DOMContentLoaded", function () {
    const readMoreButtons = document.querySelectorAll(".read-more-btn");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function () {
            const content = this.previousElementSibling; // Get the content block
            content.classList.toggle("expanded"); // Toggle the expanded class

            // Change button text
            if (content.classList.contains("expanded")) {
                this.textContent = "Read Less";
            } else {
                this.textContent = "Read More";
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let texts = document.querySelectorAll("#text-carousel p");
    let index = 0;

    function showNextText() {
        texts.forEach((text) => text.classList.remove("active")); // Hide all
        texts[index].classList.add("active"); // Show the current one
        index = (index + 1) % texts.length; // Move to the next
    }

    setInterval(showNextText, 3000); // Change text every 3 seconds
});



document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll(".flex-slide-mission");

    slides.forEach((slide) => {
        slide.addEventListener("mouseenter", function() {
            this.querySelector(".flex-title-mission").style.transform = "scale(1.1)";
            this.querySelector(".flex-about-mission").style.opacity = "1";
        });

        slide.addEventListener("mouseleave", function() {
            this.querySelector(".flex-title-mission").style.transform = "scale(1)";
            this.querySelector(".flex-about-mission").style.opacity = "0";
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    function animateObjects(target) {
        gsap.to(target, {
            x: () => Math.random() * 50 - 25, // Random X movement
            y: () => Math.random() * 50 - 25, // Random Y movement
            rotation: () => Math.random() * 360, // Rotate randomly
            duration: 3 + Math.random() * 2, // Varying animation speed
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    }

    // Floating Effect
    function floatingEffect(target) {
        gsap.to(target, {
            y: -10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    }

    // Rotate Pie Chart
    function rotatePieChart(target) {
        gsap.to(target, {
            rotation: 360,
            duration: 5,
            repeat: -1,
            ease: "linear"
        });
    }

    // Apply animations
    document.querySelectorAll(".animated-object").forEach(obj => {
        animateObjects(obj);
    });

    floatingEffect(".dollar-coin");
    floatingEffect(".bitcoin-coin");
    floatingEffect(".rupee-coin");
    rotatePieChart(".pie-chart");
});


document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const faqCard = button.parentElement;
        faqCard.classList.toggle("active");
    });
});

document.addEventListener('DOMContentLoaded', () => {
    function setEqualCardHeight() {
        const cards = document.querySelectorAll('.blog-card');
        let maxHeight = 0;

        cards.forEach(card => {
            card.style.height = 'auto'; 
            maxHeight = Math.max(maxHeight, card.offsetHeight);
        });

        cards.forEach(card => {
            card.style.height = `${maxHeight}px`;
        });
    }

    setEqualCardHeight();
    window.addEventListener('resize', setEqualCardHeight);
});


