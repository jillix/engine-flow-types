"use strict";

class Listener {
    constructor (event, error, end) {
        this.event_name = event;
        this.data = [];
        this.error = error || null;
        this.end = end || null;
    }
    addData(comp) {
        if (Array.isArray(comp)) {
            return comp.forEach(c => this.addData(c));
        }
        this.data.push(comp);
    }
    setErrorEvent(eventName) {
        this.error = eventName;
    }
    setEndEvent(eventName) {
        this.end = eventName;
    }
    toString() {
        return this.event_name;
    }
}

module.exports = Listener;
