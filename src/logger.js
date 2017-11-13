class Logger {
    constructor(name){
        this.name = name;
    }

    log(message) {
        console.log(`[ ${this.name} ] [ ${(new Date()).toTimeString()} ] ${message}`);
    }
}
exports.Logger = Logger;