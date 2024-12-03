const http = require('http')
const fs = require('fs')
 // creating server using raw node.js 
 const server = http.createServer()


  // server listener
  server.on('request', (req, res)=>{
    if(req.url === '/read-file', req.method === 'GET'){
    // streamig file reading
    const readableStream =  fs.createReadStream(process.cwd() +'/text/large-text.txt') //or __dirname + path

    readableStream.on('data',(buffer)=>{
        res.write(buffer)
    })
    readableStream.on('end',(buffer)=>{
        res.end('Hello from raw node.js server')
    })
    };
  })

server.listen(5000,()=>{
    console.log('Raw node.js server is listening on port 5000');
})