const fs = require('fs')


//asynchronous

// read file text
const readText = fs.readFile('./text/read.txt','utf-8',(err,text)=>{

    if (err) {
        throw Error('Error reading file')
    }
    console.log(text);

    fs.writeFile('./text/async-writte.txt', text + 'asynchronously written text', 'utf-8',(err)=>{
        if (err) {
            throw Error('Error writing file')
        }
    })
})

