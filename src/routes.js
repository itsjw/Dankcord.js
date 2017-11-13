class HTTPClient {
    constructor(token){
        this.token = token
        this.headers = {
            "Authorization": `Bot ${this.token}`
        }
    }
}