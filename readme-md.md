# Personal Research Profile

A responsive personal research profile website built for GitHub Pages to showcase academic credentials, research publications, and grants/awards.

## Features

- Clean, professional design optimized for academic/research profiles
- Fully responsive layout that works on all devices
- Three main pages:
  - About Me: Personal information, education, and research interests
  - Research Publications: Filterable list of journal articles, conference papers, and book chapters
  - Grants & Awards: Filterable list of research grants, awards, and fellowships
- Abstract show/hide functionality for publications
- Publication and grant filtering system
- Social media and academic profile links
- Easy to customize and maintain

## Setup Instructions

### 1. Fork or Clone this Repository

Click the "Fork" button at the top right of this page to create your own copy of this repository, or clone it directly.

### 2. Enable GitHub Pages

1. Go to your repository settings
2. Scroll down to the "GitHub Pages" section
3. Select the branch you want to deploy (usually `main` or `master`)
4. Click "Save"

Your site will be published at `https://yourusername.github.io/repository-name/`

### 3. Customize the Content

Edit the HTML files to replace the placeholder content with your own information:

- **index.html**: Update your personal information, education, research interests, and contact details
- **research.html**: Add your publications with proper citations, abstracts, and links
- **grants.html**: Add your research grants, awards, and fellowships

### 4. Customize the Design (Optional)

- **styles.css**: Modify colors, fonts, spacing, etc. to match your preferences
  - The main colors are defined as CSS variables at the top of the file
- **script.js**: Add additional functionality as needed

### 5. Add a Profile Picture

1. Add your profile picture to the repository
2. Update the image path in `index.html`

## Customization Tips

### Changing Colors

The main color scheme can be easily changed by editing the CSS variables at the top of the `styles.css` file:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    --light-color: #ecf0f1;
    --dark-color: #2c3e50;
    /* ... */
}
```

### Adding New Sections

To add a new section to any page:

1. Create a new section using the following structure:

```html
<section class="container">
    <h2>Section Title</h2>
    <!-- Your content here -->
</section>
```

2. Add appropriate styling in `styles.css` if needed

### Adding a New Page

To add an entirely new page:

1. Copy one of the existing HTML files as a template
2. Update the navigation menu in all HTML files to include the new page
3. Customize the content as needed

## License

Feel free to use this template for your personal academic website.

## Contact

For questions or suggestions, please contact [your contact information].
