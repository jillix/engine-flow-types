const types = require("../lib");

// Create a new listener
var listener = new types.Listener("some event");

listener.addComponent(new types.DataHandler("someMethod", {
    to: "some-instance"
  , data: {
        key: "value"
    }
}));

console.log(listener);
