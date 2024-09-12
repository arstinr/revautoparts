document.addEventListener('DOMContentLoaded', () => {
    const listingsContainer = document.getElementById('listings-container');
    const searchInput = document.getElementById('search');
    const filterSelect = document.getElementById('filter');

    // Function to shuffle an array (Fisher-Yates algorithm)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Shuffle the listings and store them
    let shuffledListings = shuffleArray([...listings]);

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

    function filterListings() {
        const searchTerm = searchInput.value.toLowerCase();
        const filterValue = filterSelect.value.toLowerCase();

        const filteredListings = shuffledListings.filter(item => {
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

    // Initial render with shuffled listings
    renderListings(shuffledListings);
});