# engine-flow-types

Low level library providing Engine flow types.

## Installation

```sh
$ npm i engine-flow-types
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
```

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

MIT © [jillix][website]

[website]: http://jillix.com
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
