// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
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
                const sectionHeadings = document.querySelectorAll('.publication-list h3');
                
                if (filter === 'all') {
                    publications.forEach(pub => pub.style.display = 'flex');
                    sectionHeadings.forEach(heading => heading.style.display = 'block');
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
                    sectionHeadings.forEach(heading => {
                        let hasVisiblePublications = false;
                        let currentElement = heading.nextElementSibling;
                        
                        // Check all elements until the next heading or end
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
                const grantHeadings = document.querySelectorAll('.grants-list h3');
                
                if (filter === 'all') {
                    grantItems.forEach(item => item.style.display = 'flex');
                    grantHeadings.forEach(heading => heading.style.display = 'block');
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
                    grantHeadings.forEach(heading => {
                        let hasVisibleItems = false;
                        let currentElement = heading.nextElementSibling;
                        
                        // Check all elements until the next heading or end
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
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
