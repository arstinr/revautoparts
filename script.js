document.addEventListener('DOMContentLoaded', () => {
    const listingsContainer = document.getElementById('listings-container');

    // Render listings
    function renderListings() {
        listingsContainer.innerHTML = '';
        listings.forEach(listing => {
            const listingElement = document.createElement('div');
            listingElement.classList.add('listing');
            listingElement.innerHTML = `
                <h2>${listing.title}</h2>
                <p>${listing.description}</p>
                <p>Price: $${listing.price}</p>
            `;
            listingsContainer.appendChild(listingElement);
        });
    }

    // Initial render
    renderListings();
});
