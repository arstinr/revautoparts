document.addEventListener('DOMContentLoaded', () => {
    const listingsContainer = document.getElementById('listings-container');
    const searchInput = document.getElementById('search');
    const filterSelect = document.getElementById('filter');
    const sortSelect = document.getElementById('sort');

    // Function to sort listings
    function sortListings(items, order = 'asc') {
        return items.sort((a, b) => {
            if (order === 'asc') {
                return a.title.localeCompare(b.title);
            } else {
                return b.title.localeCompare(a.title);
            }
        });
    }

    // Function to render listings
    function renderListings(items) {
        listingsContainer.innerHTML = '';
        items.forEach(item => {
            const listingElement = document.createElement('div');
            listingElement.classList.add('listing');
            listingElement.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <p class="price">₱${item.price.toLocaleString()}</p>
                <span class="category">${item.category}</span>
            `;
            listingsContainer.appendChild(listingElement);
        });
    }

    // Function to filter and sort listings
    function filterAndSortListings() {
        const searchTerm = searchInput.value.toLowerCase();
        const filterValue = filterSelect.value;
        const sortValue = sortSelect.value;

        let filteredListings = listings.filter(item => {
            const matchesSearch = item.title.toLowerCase().includes(searchTerm) ||
                                  item.description.toLowerCase().includes(searchTerm);
            const matchesFilter = filterValue === '' || item.category === filterValue;
            return matchesSearch && matchesFilter;
        });

        filteredListings = sortListings(filteredListings, sortValue);
        renderListings(filteredListings);
    }

    // Populate filter options
    const categories = [...new Set(listings.map(item => item.category))];
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        filterSelect.appendChild(option);
    });

    // Populate sort options
    sortSelect.innerHTML = `
        <option value="asc">A to Z</option>
        <option value="desc">Z to A</option>
    `;

    // Add event listeners
    searchInput.addEventListener('input', filterAndSortListings);
    filterSelect.addEventListener('change', filterAndSortListings);
    sortSelect.addEventListener('change', filterAndSortListings);

    // Initial render (sorted A to Z by default)
    renderListings(sortListings(listings));
});