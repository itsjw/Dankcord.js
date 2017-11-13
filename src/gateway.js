class GatewayClient {
    constructor(token) {
        this.token = token
    }

    getWebSocketURL(){
        return "wss://gateway.discord.gg/?v=6&encoding=json"
    }
}
exports.GatewayClient = GatewayClient;