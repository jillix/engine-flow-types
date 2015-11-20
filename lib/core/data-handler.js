class DataHandler {
    constructor (instance, method, once) {
        this.instance = instance;
        this.method = method;
        this.once = once || false;
    }
}
