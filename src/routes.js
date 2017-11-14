const snekfetch = require("snekfetch");

class HTTPClient {
    constructor(token){
        this.token = token;
        this.headers = {
            "Authorization": `Bot ${this.token}`,
            "User-Agent": "Dankcord.js (josephbanks.me, 1.0.0)",
            "Content-Type": "application/json"
        };
        this.url = "https://discordapp.com/";
        this.base = "api/v6/";
    }

    sendReq(url, method, payload) {
        url = this.url + this.base + url;
        return new Promise((resolve) => {
            switch(method){
            case "get":
                snekfetch.get(url, {headers: this.headers}).then((res) => {
                    resolve(JSON.parse(res.text));
                });
                break;

            case "post":
                snekfetch.get(url, {headers: this.headers, data: payload}).then((res) => {
                    resolve(JSON.parse(res.text));
                });
            }
        });
    }
}
exports.HTTPClient = HTTPClient;