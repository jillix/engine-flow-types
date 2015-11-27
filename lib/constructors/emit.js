"use strict";

class Emit {
    constructor (eventName, options) {
        options = options || {};
        this.event = eventName;
        this.to = options.to;
        this.net = options.net;
    }
}

module.exports = Emit;
