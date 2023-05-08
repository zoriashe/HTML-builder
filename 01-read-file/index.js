const fs = require('fs')
const path = require('path')

const textPath = path.join(__dirname, 'text.txt')

fs.readFile(textPath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});