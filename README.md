# engine-flow-types

Low level library providing Engine flow types.

## Installation

```sh
$ npm i --save engine-flow-types
```

## Example

```js
const types = require("engine-flow-types");

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
```

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [jillix][website]

[license]: http://showalicense.com/?fullname=jillix%20%3Ccontact%40jillix.com%3E%20(http%3A%2F%2Fjillix.com)&year=2015#license-mit
[website]: http://jillix.com
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md