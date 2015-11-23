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
// => Listener {
//   event_name: 'some event',
//   data:
//    [ DataHandler {
//        method: 'someMethod',
//        once: false,
//        to: 'some-instance',
//        data: {} } ],
//   error: 'error event',
//   end: 'end event' }
