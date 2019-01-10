const EventEmitter = require('events');
const ee = new EventEmitter;

ee.on('we did it with data', data => {
  console.log(data);
});
const str = 'Hey I\'m Connor and I\'m a software dev!';
ee.emit('we did it with data', str);
