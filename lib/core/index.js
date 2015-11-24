const iterateObject = require("iterate-object")
    , typpy = require("typpy")
    , mapObject = require("map-o")
    ;

function prepareData(input) {
    iterateObject(input, value => {

        if (typpy(value.types, String)) {
            value.types = { normal: [value.types] };
        } else if (typpy(value.types, Array)) {
            value.types = { normal: value.types };
        }

        value.types = Object(value.types);
        mapObject(value.types, (value, name) => {
            return {
                char: value[0]
              , icon: value[1]
            };
        });
    });
    return input;
}

var Coreconstructor_names = module.exports = prepareData({
    listener: {
        constructor_name: "Listener"
    }
  , data_handler: {
        constructor_name: "DataHandler"
      , types: {
            normal: [":", "f087"]
          , once: [".", "f087"]
        }
    }
  , emit: {
        constructor_name: "Emit"
      , types: ">>"
      , types: {
            normal: [":", "f087"]
          , once: [".", "f087"]
        }
    }
  , stream: {
        constructor_name: "StreamHandler"
      , types: {
            normal: ">*"
        }
    }
});
