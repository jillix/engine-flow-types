// Dependencies
var types = require("./core")
  , constructors = require("./constructors")
  , iterateObject = require("iterate-object")
  , ul = require("ul")
  , typpy = require("typpy")
  , regexEscape = require("regex-escape")
  ;

// Initialize the Engine Types object
var EngineTypes = module.exports = {};
EngineTypes._prefixes = {};

// Add the constructors
iterateObject(types, (value, name) => {
    var t = EngineTypes[value.constructor_name] = constructors[value.constructor_name];
    if (!t) {
        throw new Error("There is no constructor with this name: " + name);
    }

    // Append the _prefixes
    iterateObject(value.types, (cType, typeName) => {
        EngineTypes._prefixes[cType.char] = {
            func: t
          , type: typeName
        };
    });

    iterateObject(ul.merge({
        name: name
    }, value), function (v, n) {
        if (n === "chars" && typpy(v, String)) {
            v = { normal: v };
        }
        t[n] = v;
    });
});

EngineTypes._prefixesRegex = new RegExp(
    `^(${Object.keys(EngineTypes._prefixes).map(regexEscape).join("|")})[a-z]`
  , "i"
);
