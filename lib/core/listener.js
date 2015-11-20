"use strict";

class Listener {
    constructor (event) {
        this.event_name = event;
        this.components = [];
    }
    addComponent(comp) {
        this.components.push(comp);
    }
}
