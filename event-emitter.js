const EventEmitter = require('events')
const myEmitter = new EventEmitter()


// event listener 
myEmitter.on('birthday', ()=>{
console.log('Happy Birthday');
})
myEmitter.on('birthday', (gift)=>{
console.log('Here is your '+ gift);
})

//event emit
myEmitter.emit('birthday', 'watch')