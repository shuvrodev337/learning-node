const fs = require('fs')


//synchronous

// read file text
const readText = fs.readFileSync('./text/read.txt','utf-8')
console.log(readText);

// write file text
const writeText = fs.writeFileSync('./text/write.txt', readText + 'This is my written text')
console.log(writeText);


