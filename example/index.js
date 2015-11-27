const types = require("../lib");

// Create a new listener
var listener = new types.Listener("some event", "error event", "end event");

listener.addData(new types.DataHandler("someMethod", {
    to: "some-instance"
  , data: {
        key: "value"
    }
}));

console.log(listener);
// =>
// Listener {
//   event_name: 'some event',
//   data:
//    [ DataHandler {
//        to: 'some-instance',
//        options: undefined,
//        method: 'someMethod',
//        once: false } ],
//   error: 'error event',
//   end: 'end event' }

var dh = new types.DataHandler("someMethod", {
    once: true
  , to: "someInstance"
}, {
    some: "data"
});

console.log(dh.get(), dh.constructor.name);
// => [ 'someMethod', { some: 'data' } ]

var sh  = new types.StreamHandler("someMethod", {
    to: "someInstance"
}, {
    some: "data"
});

console.log(sh.get(), sh.constructor.name);
// => [ 'someMethod', { some: 'data' } ]
