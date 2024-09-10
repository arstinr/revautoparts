document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.getElementById('cta-button');
    const searchFilter = document.getElementById('search-filter');

    ctaButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        const searchFilterRect = searchFilter.getBoundingClientRect();
        const stopScrollDistance = 20; // Distance from top to stop scrolling (in pixels)
        
        const targetScrollPosition = Math.min(
            window.pageYOffset + searchFilterRect.top - stopScrollDistance,
            document.documentElement.scrollHeight - window.innerHeight
        );

        window.scrollTo({
            top: targetScrollPosition,
            behavior: 'smooth'
        });
    });
});
