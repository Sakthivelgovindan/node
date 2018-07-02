const EventEmitter = require('events');
const emitter = new EventEmitter();

var url = 'https://designqube.com';

class logger extends EventEmitter{
    log(message){
        console.log(message);
        this.emit('messagelogged',{id : 1,url : 'https://designqube.com'});
    }
}


module.exports = logger;