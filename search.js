const fs = require('fs');
const appJs = fs.readFileSync('app.js', 'utf8');

function findOccurrences(fileContent, fileName, searchStr) {
    const lines = fileContent.split('\n');
    console.log(`=== Searching for "${searchStr}" in ${fileName} ===`);
    lines.forEach((line, idx) => {
        if (line.includes(searchStr)) {
            console.log(`${idx + 1}: ${line.trim()}`);
        }
    });
}

findOccurrences(appJs, 'app.js', 'function detectDeviceLayout');
