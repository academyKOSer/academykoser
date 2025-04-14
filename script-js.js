// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Toggle abstract visibility
    window.toggleAbstract = function(link) {
        const abstractElement = link.parentElement.nextElementSibling;
        
        if (abstractElement.style.display === 'block') {
            abstractElement.style.display = 'none';
            link.textContent = 'Show Abstract';
        } else {
            abstractElement.style.display = 'block';
            link.textContent = 'Hide Abstract';
        }
    };
    
    // Filter publications and grants
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle active class
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Research page filtering
            if (document.querySelector('.publication-list')) {
                const publications = document.querySelectorAll('.publication');
                
                if (filter === 'all') {
                    publications.forEach(pub => pub.style.display = 'flex');
                    document.querySelectorAll('h3').forEach(heading => heading.style.display = 'block');
                } else {
                    // Hide/show relevant publications
                    publications.forEach(pub => {
                        if (pub.classList.contains(filter)) {
                            pub.style.display = 'flex';
                        } else {
                            pub.style.display = 'none';
                        }
                    });
                    
                    // Hide/show section headings based on whether they have visible children
                    document.querySelectorAll('h3').forEach(heading => {
                        const nextHeading = heading.nextElementSibling;
                        let hasVisiblePublications = false;
                        
                        // Check if there are visible publications after this heading
                        let currentElement = nextHeading;
                        while (currentElement && !currentElement.tagName.match(/^H[1-3]$/i)) {
                            if (currentElement.classList.contains('publication') && 
                                currentElement.style.display !== 'none') {
                                hasVisiblePublications = true;
                                break;
                            }
                            currentElement = currentElement.nextElementSibling;
                        }
                        
                        heading.style.display = hasVisiblePublications ? 'block' : 'none';
                    });
                }
            }
            
            // Grants page filtering
            if (document.querySelector('.grants-list')) {
                const grantItems = document.querySelectorAll('.grant-item');
                
                if (filter === 'all') {
                    grantItems.forEach(item => item.style.display = 'flex');
                    document.querySelectorAll('h3').forEach(heading => heading.style.display = 'block');
                } else {
                    // Hide/show relevant grants
                    grantItems.forEach(item => {
                        if (item.classList.contains(filter)) {
                            item.style.display = 'flex';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                    
                    // Hide/show section headings based on whether they have visible children
                    document.querySelectorAll('h3').forEach(heading => {
                        const nextHeading = heading.nextElementSibling;
                        let hasVisibleItems = false;
                        
                        // Check if there are visible items after this heading
                        let currentElement = nextHeading;
                        while (currentElement && !currentElement.tagName.match(/^H[1-3]$/i)) {
                            if (currentElement.classList.contains('grant-item') && 
                                currentElement.style.display !== 'none') {
                                hasVisibleItems = true;
                                break;
                            }
                            currentElement = currentElement.nextElementSibling;
                        }
                        
                        heading.style.display = hasVisibleItems ? 'block' : 'none';
                    });
                }
            }
        });
    });
});
