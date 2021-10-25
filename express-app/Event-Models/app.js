const evt = require('events');

const evtEmitter = new evt.EventEmitter();

const listnerOne = ()=>{
    console.log('listnerOne Executed');
};

const listnerTwo = ()=>{
    console.log('listnerTwoExecuted');
};
//adding listneer 


evtEmitter.on('myEvent',listnerTwo);
evtEmitter.on('myEvent',listnerOne);
evtEmitter.addListener('myEvent',listnerOne)

evtEmitter.emit('myEvent');