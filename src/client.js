const {HTTPClient} = require("./routes.js");
const {GatewayClient} = require("./gateway.js");

class Client {
    constructor(token){
        this.token = token;
        this.http = new HTTPClient(token);
        this.gateway = new GatewayClient(token);
    }
}
exports.Client = Client;