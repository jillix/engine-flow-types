var types = require("./core")
  , iterateObject = require("iterate-object")
  , ul = require("ul")
  ;

var EngineTypes = module.exports = {};

iterateObject(type, (value, name) => {
    EngineTypes[name] = ul.merge({
        name: name
    }, value);
});
