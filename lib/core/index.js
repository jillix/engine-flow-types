var CoreTypes = module.exports = {
    listener: {
        type: "Listener"
    }
  , data_handler: {
        type: "DataHandler"
      , chars: {
            normal: ":"
          , once: "."
        }
    }
  , emit: {
        type: "Emit"
      , chars: ">>"
    }
  , stream: {
        type: "StreamHandler"
      , chars: {
            normal: ">*"
        }
    }
};
