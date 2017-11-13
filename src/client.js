const {HTTPClient} = require("./routes.js");
const {GatewayClient} = require("./gateway.js");
const {EventEmitter} = require("events");

class Client extends EventEmitter {
    constructor(token){
        super();
        this.token = token;
        this.http = new HTTPClient(token);
        this.gateway = new GatewayClient(token, this);
    }
}
exports.Client = Client;