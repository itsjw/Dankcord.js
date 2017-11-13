const {HTTPClient} = require("./routes.js")

class Client {
    constructor(token){
        this.token = token
        this.http = HTTPClient
    }
}