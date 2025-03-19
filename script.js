// Get the button
var scrollTopBtn = document.getElementById("scrollTopBtn");

// Show the button when scrolling down 200px
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "flex";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// Scroll smoothly to the top when clicked  
// THIS IS THE SCRIPT OF RESOURCE PAGE
scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll(".nav-link").forEach(link => {
    link.setAttribute("target", "_blank");  // ❌ REMOVE THIS LINE
});
document.querySelectorAll(".nav-link").forEach(link => {
    link.removeAttribute("target"); // Removes any forced _blank
    link.setAttribute("target", "_self"); // Ensures it opens in the same tab
});

function openModal(videoId) {
    var videoSrc = document.getElementById(videoId).querySelector('source').src;
    var modal = document.getElementById('videoModal');
    var modalVideo = document.getElementById('modalVideo');
    var modalSource = document.getElementById('modalSource');

    modalSource.src = videoSrc;
    modalVideo.load(); // Reload the video with the new source
    modal.style.display = "flex"; // Show the modal
}

function closeModal() {
    var modal = document.getElementById('videoModal');
    modal.style.display = "none"; // Close the modal
}


// Simple script to cycle through testimonials (e.g., use for automatic sliding or a carousel library)
// THIS IS THE SCRIPT OF TESTIMONIAL PAGE
// JavaScript to manage the carousel functionality
let currentIndex = 0;

const testimonialCards = document.querySelectorAll('.testimonial-card');
const totalTestimonials = testimonialCards.length;

const showTestimonial = (index) => {
  // Hide all testimonials
  testimonialCards.forEach(card => card.classList.remove('active'));
  
  // Show the testimonial at the given index
  testimonialCards[index].classList.add('active');
};

document.querySelector('.prev').addEventListener('click', (e) => {
  e.preventDefault();
  currentIndex = (currentIndex === 0) ? totalTestimonials - 1 : currentIndex - 1;
  showTestimonial(currentIndex);
});

document.querySelector('.next').addEventListener('click', (e) => {
  e.preventDefault();
  currentIndex = (currentIndex === totalTestimonials - 1) ? 0 : currentIndex + 1;
  showTestimonial(currentIndex);
});

// Initialize the first testimonial to be active
showTestimonial(currentIndex);






// Function to open the video in the modal
function openModal(videoId) {
    // Get the video source (URL) for the clicked video
    const videoSource = document.getElementById(videoId).getElementsByTagName('source')[0].src;

    // Set the video source for the modal
    document.getElementById('modalSource').src = videoSource;

    // Show the modal
    document.getElementById('videoModal').style.display = 'flex';

    // Get the modal video element and play it unmuted
    const modalVideo = document.getElementById('modalVideo');
    modalVideo.load();
    modalVideo.play();
    modalVideo.muted = false;  // Enable sound when opened in modal
}

// Function to close the modal and stop the video
function closeModal() {
    // Hide the modal and stop the video
    document.getElementById('videoModal').style.display = 'none';
    const modalVideo = document.getElementById('modalVideo');
    modalVideo.pause();
    modalVideo.currentTime = 0;
    modalVideo.muted = true;  // Keep the video muted when it's closed
}

// Add event listener specifically to video elements for modal opening
document.querySelectorAll('.video-testimonial-card video').forEach(video => {
    video.addEventListener('click', function(e) {
        const videoId = e.target.id; // Get the id of the clicked video
        openModal(videoId);
        e.stopPropagation(); // Prevent the event from propagating to the parent card
    });
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



















