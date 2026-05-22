# Junk Removal & Moving Company Website

A professional, fully responsive React website for a junk removal and moving company.

## Features

✨ **Complete Multi-Page Website** including:
- **Home Page** - Hero section with call-to-action, service preview, and benefits
- **Services Page** - Detailed service descriptions with pricing and process overview
- **About Page** - Company story, mission, values, team members, and statistics
- **Testimonials Page** - Customer reviews with ratings and overall rating display
- **Get Quote Page** - Comprehensive inquiry form with FAQs
- **Contact Page** - Contact information and message form

## Design Highlights

🎨 **Modern & Professional**
- Beautiful gradient color scheme (purple/blue)
- Fully responsive mobile-first design
- Smooth animations and transitions
- Clean, organized layout

📱 **Responsive**
- Works perfectly on desktop, tablet, and mobile
- Mobile hamburger menu
- Adaptive grid layouts

⚡ **Performance**
- Fast loading times
- Optimized images
- Clean code structure

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Jworden12/junk-removal-moving-website.git
cd junk-removal-moving-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

All placeholder content is marked with `[BRACKETS]`. Search for these in the code and replace with your company information:

- `[YOUR COMPANY NAME]` - Company name
- `[YOUR EMAIL HERE]` - Contact email
- `[YOUR PHONE HERE]` - Phone number
- `[YOUR ADDRESS HERE]` - Business address
- `[SERVICE DESCRIPTION]` - Service details
- `[PRICING INFO]` - Price information
- And many more...

### Key Files to Edit

- `src/components/Navbar.js` - Update company name/logo
- `src/components/Footer.js` - Update footer information
- `src/pages/Home.js` - Update home page content
- `src/pages/Services.js` - Update service descriptions
- `src/pages/About.js` - Add company history and team info
- `src/pages/Contact.js` - Update contact information

## Form Submission

The contact and quote forms are currently set up to log to the console. To enable email functionality, you can:

1. **Use a service like EmailJS** - Add backend integration
2. **Create a backend API** - Handle form submissions server-side
3. **Use a form service** - Like Formspree or Basin

Search for `TODO: Add form submission logic` in the code to implement this.

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── Navbar.js
│   ├── Navbar.css
│   ├── Footer.js
│   └── Footer.css
├── pages/
│   ├── Home.js
│   ├── Services.js
│   ├── About.js
│   ├── Testimonials.js
│   ├── GetQuote.js
│   ├── Contact.js
│   └── Pages.css
├── App.js
├── App.css
├── index.js
└── index.css
```

## Technologies Used

- **React** - UI library
- **React Router** - Page navigation
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Application logic

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Add backend API for form submissions
- [ ] Integrate Google Maps
- [ ] Add online booking system
- [ ] Implement customer authentication
- [ ] Add photo gallery with before/after images
- [ ] Add blog section
- [ ] Implement customer reviews/ratings system
- [ ] Add live chat support

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please create an issue in the repository.

---

**Made with ❤️ for small business owners**
