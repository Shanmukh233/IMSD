const fs = require('fs');
             
const content = "(HTML, CSS, Javascript, Typescript, MongoDB, Express.js, React.js, Node.js)";

fs.writeFile('src.txt', content, 'utf8', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('src.txt created successfully!');
    }
});
