"use strict";

class Handler {
    /**
     * Handler
     * Creates a new `Handler` instance.
     *
     * @name Handler
     * @function
     * @param {Object} data An object containing the following fields:
     *
     *  - `to` (String): The target instance name.
     *  - `args` (Array): Additional arguments in the handler call.
     *  - `isStream` (Boolean): If `true`, the handler will be a stream handler.
     *  - `handler` (String): The method name.
     *  - `isLink` (Boolean): If `true`, the handler will be a server side method (called from the client)–aka *link*.
     *
     * @return {Handler} The `Handler` instance:
     */
    constructor (instance, method, options) {
        this.to = instance;
        this.options = options;
        this.method = method;
    }

    get () {
        var methodStr = this.method;

        if (typeof this.to === "string") {
            methodStr = this.to + "/" + this.method;
        }

        return [methodStr, this.options];
    }

    toFlow (arr) {
        if (arr[1]) {
            return arr;
        }
        return arr[0];
    }
}

module.exports = Handler;
