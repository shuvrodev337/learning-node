const http = require('http')
const fs = require('fs')
 // creating server using raw node.js 
 const server = http.createServer()


  // server listener
  server.on('request', (req, res)=>{


    if (req.url === '/' && req.method === 'GET') {
        // Handle root route
        res.statusCode=200
        res.end('Welcome to the raw Node.js server!');
      } else if(req.url === '/read-file' &&  req.method === 'GET'){
    // streamig file reading
          const readableStream =  fs.createReadStream(process.cwd() +'/text/large-text.txt') //or __dirname + path
    // listeners
    readableStream.on('data',(buffer)=>{
        res.statusCode=200
        res.write(buffer)
    })
    readableStream.on('end',()=>{
        res.statusCode=200
        res.end('Hello from raw node.js server')
    })
    readableStream.on('error',(error)=>{
        console.log(error);
        res.statusCode=500
        res.end('something went wrong')
    })
    }else {
        // Handle other routes or invalid paths
        res.statusCode = 404;
        res.end('Not Found');
      }
  })

server.listen(5000,()=>{
    console.log('Raw node.js server is listening on port 5000');
})