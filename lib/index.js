const types = require("./core")
    , constructors = require("./constructors")
    , iterateObject = require("iterate-object")
    , ul = require("ul")
    , typpy = require("typpy")
    ;

var EngineTypes = module.exports = {};

iterateObject(types, (value, name) => {
    var t = EngineTypes[value.type] = constructors[value.type];
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
