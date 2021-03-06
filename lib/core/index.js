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
              , icon: value[1] && ("&#x" + value[1])
            };
        });
    });
    return input;
}

var Coreconstructor_names = module.exports = prepareData({
    listener: {
        constructor_name: "Listener"
      , types: {
            normal: [null, "f033"]
        }
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
      , types: {
            normal: [">>", "f087"]
          , error: [undefined, "f02d"]
          , end: [undefined, "f02d"]
          , leaking: ["|*", "f0c4"]
        }
    }
  , stream_handler: {
        constructor_name: "StreamHandler"
      , types: {
            normal: [">*", "f0c4"]
          , leaking: ["|*", "f0c4"]
        }
    }
});
