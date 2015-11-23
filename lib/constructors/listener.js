"use strict";

class Listener {
    constructor (event, error, end) {
        this.event_name = event;
        this.data = [];
        this.error = error || null;
        this.end = end || null;
    }
    addData(comp) {
        this.data.push(comp);
    }
    setErrorEvent(eventName) {
        this.error = eventName;
    }
    setEndEvent(eventName) {
        this.end = eventName;
    }
}

module.exports = Listener;
