const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const { createClient } = supabase;
const supabaseClient = createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_ANON_KEY);

document.addEventListener('DOMContentLoaded', async () => {
    const listingsContainer = document.getElementById('listings-container');
    const searchInput = document.getElementById('search');
    const filterSelect = document.getElementById('filter');
    const sortSelect = document.getElementById('sort');

    // Function to fetch data from Supabase
    async function fetchListings() {
        try {
            const { data, error } = await supabaseClient
                .from('listings')
                .select('*');
            
            console.log('Supabase Response:', { data, error }); // Debug log
            
            if (error) {
                console.error('Supabase Error:', error);
                throw error;
            }
            
            if (!data || data.length === 0) {
                console.log('No data returned from Supabase');
                return [];
            }
            
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    }

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

    function renderListings(items) {
        listingsContainer.innerHTML = '';
        items.forEach(item => {
            const listingElement = document.createElement('div');
            listingElement.classList.add('listing');
    
            const imageHtml = item.image
                ? `<img src="${item.image}" alt="${item.title}" class="listing-image">`
                : `<div class="listing-image empty">No Image</div>`;
    
            listingElement.innerHTML = `
                ${imageHtml}
                <div class="listing-text">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <p class="price">₱${item.price.toLocaleString()}</p>
                    <span class="category">${item.category}</span>
                </div>
            `;
            listingsContainer.appendChild(listingElement);
        });
    }

    // Function to filter and sort listings
    function filterAndSortListings(listings) {
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

    try {
        // Fetch initial data
        const listings = await fetchListings();
        
        if (listings.length === 0) {
            listingsContainer.innerHTML = '<p>No listings found.</p>';
            return;
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
        searchInput.addEventListener('input', () => filterAndSortListings(listings));
        filterSelect.addEventListener('change', () => filterAndSortListings(listings));
        sortSelect.addEventListener('change', () => filterAndSortListings(listings));

        // Initial render (sorted A to Z by default)
        renderListings(sortListings(listings));
    } catch (error) {
        console.error('Error initializing app:', error);
        listingsContainer.innerHTML = '<p>Error loading listings. Please try again later.</p>';
    }
});