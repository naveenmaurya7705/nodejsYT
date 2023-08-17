const EventEmitter =require('events');

const event = new EventEmitter();

event.on('sayName',()=>{
    console.log("your Name is Naveen.");
});

event.on('sayName',()=>{
    console.log("your Name is Naveen Maurya.");
});

event.emit("sayName");
 
