"use strict";

const Handler = require("./handler")
    , deffy = require("deffy")
    ;

class StreamHandler extends Handler {
    constructor (method, options, data) {
        options = Object(options);
        super(options.to, method, data);
        this.leaking = options.leaking = deffy(options.leaking, false);
    }
}

module.exports = StreamHandler;
