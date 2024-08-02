const fs = require('fs');
const path = require('path');

// Path to the JSON file
const jsonFilePath = path.join(__dirname, 'tokens.json');

// Read the JSON file
const rawData = fs.readFileSync(jsonFilePath, 'utf8');

// Parse the JSON data
let tokens;
try {
  tokens = JSON.parse(rawData);
} catch (error) {
  console.error('Failed to parse JSON:', error);
  process.exit(1);
}

// Generate CSS content
let cssContent = ':root {\n';
for (const [key, value] of Object.entries(tokens)) {
  cssContent += `  --${key}: ${value};\n`;
}
cssContent += '}\n';

// Print the CSS content before creating the file
console.log('Generated CSS content:\n');
console.log(cssContent);

// Define the output path for the CSS file
const outputPath = path.join(__dirname, 'design-tokens.css');

// Write the CSS content to a file
fs.writeFileSync(outputPath, cssContent, 'utf8');

console.log('CSS file created successfully at:', outputPath);
