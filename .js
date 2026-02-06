// script.js
// Purpose: Redirect to gallery page when "Explore Memories" is clicked

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('enter-btn');

    // Safety check + debug hint
    if (!button) {
        console.error('Could not find button with id="enter-btn"');
        console.info('Make sure the button in HTML has exactly: id="enter-btn"');
        return;
    }

    console.log('Button found – click handler attached');

    button.addEventListener('click', () => {
        console.log('Button clicked → redirecting to gallery.html');
        
        // The actual redirect
        window.location.href = 'gallery.html';

        // Optional alternatives (uncomment one if the main line doesn't work in your environment):
        // window.location.assign('gallery.html');
        // window.location = 'gallery.html';
    });
});

// Select all photo cards and the lightbox elements
const cards = document.querySelectorAll('.photo-card img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-content');

// When an image is clicked, show it in the lightbox
cards.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

// Close lightbox when clicking the background or close button
lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

