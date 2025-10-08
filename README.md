# Tara Bar - Pre-Launch Website

A modern, responsive pre-launch website for Tara Bar konjac protein bars, inspired by Berachain's clean design aesthetic.

## 🌟 Features

- **Hero Section** with compelling tagline and email signup form
- **Product Benefits** highlighting konjac-based fullness, plant-powered energy, and low sugar
- **Visual Mockups** with animated product displays and lifestyle imagery
- **Social Proof** with trust signals and social media integration
- **Responsive Design** optimized for all devices
- **Interactive Animations** for engaging user experience

## 🚀 Quick Start

1. Open `index.html` in your web browser
2. Or serve locally: `python3 -m http.server 8000` and visit `http://localhost:8000`

## 📁 File Structure

```
/workspace/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md           # This file
```

## 🎨 Design Elements

### Color Palette
- **Primary Green**: `#2D5A27` - Main brand color
- **Light Green**: `#4A7C59` - Secondary brand color  
- **Accent Green**: `#8FBC8F` - Highlights and accents
- **Bright Accent**: `#90EE90` - Call-to-action elements

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 📧 Email Form Integration

The email signup form is ready for integration with your preferred service:

### Current Implementation
- Client-side validation
- Success/error messaging
- Form data collection (name, email, consent)

### Integration Options
1. **Mailchimp**: Add your API endpoint to the form submission
2. **ConvertKit**: Replace the form action with ConvertKit URL
3. **Custom Backend**: Send form data to your server endpoint

### Example Integration (Mailchimp)
```javascript
// In script.js, replace the setTimeout simulation with:
fetch('YOUR_MAILCHIMP_ENDPOINT', {
    method: 'POST',
    body: formData
})
.then(response => response.json())
.then(data => {
    showMessage(`Thanks ${name}! You're now part of the first taste crew.`, 'success');
});
```

## 🔧 Customization

### Adding Real Product Images
1. Replace the `.bar-mockup` CSS with your actual product image
2. Update the `.image-placeholder` background with your hero image
3. Add real packaging mockups in the visuals section

### Social Media Links
Update the social media URLs in the HTML:
```html
<a href="https://instagram.com/tarabar" class="social-link instagram">
<a href="https://tiktok.com/@tarabar" class="social-link tiktok">
```

### Analytics Integration
Add Google Analytics or your preferred tracking:
```html
<!-- Add to <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 📱 Mobile Optimization

The website is fully responsive with:
- Mobile-first design approach
- Touch-friendly interactive elements
- Optimized typography scaling
- Simplified navigation for small screens

## 🎯 Performance Features

- **Lazy Loading**: Images and animations load as needed
- **Optimized CSS**: Efficient animations and transitions
- **Minimal JavaScript**: Fast loading and execution
- **Web Fonts**: Preloaded for better performance

## 🛠 Browser Support

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 SEO Ready

- Semantic HTML structure
- Meta descriptions and titles
- Open Graph tags ready for social sharing
- Structured data markup ready

## 🚀 Deployment Options

### Static Hosting (Recommended)
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Push to a GitHub repo
- **AWS S3**: Upload files to S3 bucket

### Traditional Hosting
- Upload all files to your web server's public directory
- Ensure your domain points to the correct folder

## 📞 Support

For customizations or questions about the website:
1. Check the code comments for guidance
2. Test changes in a local environment first
3. Keep backups of your customizations

---

**Ready to launch your protein bar revolution!** 🌱💪