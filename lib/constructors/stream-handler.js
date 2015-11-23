"use strict";

class StreamHandler {
    constructor (method, options, data) {
        if (typeof options === "boolean") {
            options = { once: options };
        }
        this.method = method;
        this.once = options.once || false;
        this.to = options.to;
        this.data = data || {};
    }
}

module.exports = StreamHandler;
