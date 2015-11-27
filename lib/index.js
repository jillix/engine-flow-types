// Dependencies
var types = require("./core")
  , constructors = require("./constructors")
  , iterateObject = require("iterate-object")
  , ul = require("ul")
  , typpy = require("typpy")
  ;

// Initialize the Engine Types object
var EngineTypes = module.exports = {};

// Add the constructors
iterateObject(types, (value, name) => {
    var t = EngineTypes[value.constructor_name] = constructors[value.constructor_name];
    if (!t) {
        throw new Error("There is no constructor with this name: " + name);
    }
    iterateObject(ul.merge({
        name: name
    }, value), function (v, n) {
        if (n === "chars" && typpy(v, String)) {
            v = { normal: v };
        }
        t[n] = v;
    });
});
