let _singleton = {};

class Singleton {
    constructor(proto) {
        let cls = eval(proto);
        if (!!_singleton[cls.name]) {
            return _singleton[cls.name];
        }
        else {
            _singleton[cls.name] = new cls();
            return _singleton[cls.name];
        }
    }
}

module.exports = function SingletonWrapper(className) {
    return function () { return new Singleton(eval(className).name); }
}