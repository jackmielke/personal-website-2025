# Jack Mielke's Personal Website

A beautiful, minimalist personal website showcasing information about Jack Mielke.

## Project Structure

This website is intentionally kept simple and easy to understand:

- `index.html` - The main HTML structure
- `styles.css` - All styling for the website
- `script.js` - JavaScript for animations and interactivity
- `Jack enjoying the mountains.jpg` - Profile image

## Features

- Clean, elegant design with subtle animations
- Profile image with hover effects
- Word filtering animation that cycles through interests
- Interactive elements that respond to user actions
- Dark/light mode toggle (double-click anywhere on the container)
- Responsive layout that works on all devices
- Social media links with hover animations
- Pulsing interactive element to pause/resume the word animation

## How Everything Works

### HTML Structure
The HTML file (`index.html`) defines the structure of the website:
- Container div holds everything
- Profile section with image and name
- Main content with welcome message and interests
- Interactive elements and footer with social links

### CSS Styling
The CSS file (`styles.css`) controls how everything looks:
- Base styles set fonts, colors, and layout
- Profile image styling creates the circular frame with shadow
- Animations are defined at the bottom using `@keyframes`
- Hover effects use the `:hover` pseudo-class
- Responsive design uses `@media` queries to adjust for smaller screens

### JavaScript Interactivity
The JavaScript file (`script.js`) adds dynamic behavior:
- Word filtering animation cycles through your interests
- Click events on interactive elements toggle animations
- Hover effects change colors and styles
- Theme toggle switches between light and dark mode

## How to Modify

### To change the content:
- Edit the text in `index.html`
- To change the filtering words, modify the `words` array in `script.js`
- Replace the profile image by replacing the file or updating the image path

### To change the styling:
- All styles are in `styles.css`
- The color scheme can be easily modified by changing the color values
- Animation speeds can be adjusted by changing the timing values

### To change the interactivity:
- The animation timing can be adjusted in `script.js`
- Add new interactive elements by adding event listeners
- Modify the theme toggle to use different colors

## Version History

### Version 1.0 (Initial Version)
- Basic structure with name and interests
- Simple word filtering animation
- Clean, minimalist design

### Version 2.0 (Enhanced Version)
- Added profile image with hover effects
- Improved styling with gradient backgrounds
- Added interactive elements (pause/resume button, theme toggle)
- Added social media links
- Enhanced animations and visual effects