const fs = require('fs');
const path = require('path');

// File paths (current directory)
const inputFilePath = path.join(__dirname, 'input.txt');
const outputFilePath = path.join(__dirname, 'output.txt');

// Read file
fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Replace all 'A' with 'M'
    const modifiedData = data.replace(/A/g, 'M');

    // Write to output file
    fs.writeFile(outputFilePath, modifiedData, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File updated successfully! Output saved as output.txt');
        }
    });
});