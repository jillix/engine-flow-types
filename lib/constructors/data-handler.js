"use strict";

const Handler = require("./handler");

class DataHandler extends Handler {
    constructor (method, options, data) {
        if (typeof options === "boolean") {
            options = { once: options };
        }
        super(options.to, method, data);
        this.once = options.once || false;
    }
}

module.exports = DataHandler;
