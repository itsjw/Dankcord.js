class HTTPClient {
    constructor(token){
        this.token = token;
        this.headers = {
            "Authorization": `Bot ${this.token}`,
            "User-Agent": "Dankcord.js (josephbanks.me, 1.0.0)",
            "Content-Type": "application/json"
        };
    }
}
exports.HTTPClient = HTTPClient;