document.getElementById('arcs-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior
    document.body.classList.add('fade-out'); // Add fade-out class
    
    const loadingImage = document.getElementById('loading-image');
    loadingImage.classList.add('show'); // Show the loading image

    // Listen for the transition end to change the location
    document.body.addEventListener('transitionend', function () {
        // Wait a moment for the loading image to fade in
        setTimeout(function () {
            window.location.href = 'personatges.html'; // Navigate to the new page
        }, 120); // Short delay before navigating
    }, { once: true }); // Ensures this only runs once
});