document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.getElementById('cta-button');
    const searchFilter = document.getElementById('search-filter');

    ctaButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        const searchFilterRect = searchFilter.getBoundingClientRect();
        const targetScrollPosition = window.pageYOffset + searchFilterRect.top - (window.innerHeight / 2) + (searchFilterRect.height / 2);

        window.scrollTo({
            top: targetScrollPosition,
            behavior: 'smooth'
        });
    });
});
