document.addEventListener('DOMContentLoaded', () => {
    const listingsContainer = document.getElementById('listings-container');
    const searchInput = document.getElementById('search');
    const filterSelect = document.getElementById('filter');

    function renderListings(items) {
        listingsContainer.innerHTML = '';
        items.forEach(item => {
            const listingElement = document.createElement('div');
            listingElement.classList.add('listing');
            listingElement.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <p class="price">$${item.price.toFixed(2)}</p>
                <span class="category">${item.category}</span>
            `;
            listingsContainer.appendChild(listingElement);
        });
    }

    function filterListings() {
        const searchTerm = searchInput.value.toLowerCase();
        const filterValue = filterSelect.value.toLowerCase();
        const filteredListings = listings.filter(item => {
            const matchesSearch = item.title.toLowerCase().includes(searchTerm) ||
                                  item.description.toLowerCase().includes(searchTerm);
            const matchesFilter = filterValue === '' || item.category.toLowerCase() === filterValue;
            return matchesSearch && matchesFilter;
        });
        renderListings(filteredListings);
    }

    searchInput.addEventListener('input', filterListings);
    filterSelect.addEventListener('change', filterListings);

    // Populate filter options
    const categories = [...new Set(listings.map(item => item.category))];
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        filterSelect.appendChild(option);
    });

    // Initial render
    renderListings(listings);
});