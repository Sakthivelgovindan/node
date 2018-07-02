const EventEmitter = require('events');
const emitter = new EventEmitter();


const Logger = require('./logger');
const logger = new Logger();

logger.on('messagelogged',function(args){
    console.log("Message logged....",args)
})

logger.log('message');