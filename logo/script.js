// Define the types of logos here
const logoTypes = [
    'Type1', 'Type2', 'Type3', 'Type4', 'Type5'
];

// Function to generate a random logo with user input
function generateLogo(words) {
    const type = logoTypes[Math.floor(Math.random() * logoTypes.length)];
    const logoContainer = document.getElementById('logoContainer');
    logoContainer.innerHTML = ''; // Clear previous logo
    const svg = createLogoSVG(type, words);
    logoContainer.appendChild(svg);
}

// Function to create an SVG logo based on type and words
function createLogoSVG(type, words) {
    // Implement the logic to create different types of logos using SVG
    // You can use SVG libraries like D3.js or Snap.svg to create advanced logos

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '300');
    svg.setAttribute('height', '300');

    // Add SVG elements here based on the type and words

    return svg;
}

// Event listener for the "Generate" button
document.getElementById('generateButton').addEventListener('click', () => {
    const words = prompt('Enter 1 to 5 words separated by spaces:');
    if (words) {
        generateLogo(words);
        const svgData = document.getElementById('logoContainer').innerHTML;
        const blob = new Blob([svgData], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        const downloadLink = document.getElementById('downloadLink');
        downloadLink.href = url;
        downloadLink.style.display = 'inline-block';
    }
});
