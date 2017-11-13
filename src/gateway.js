const WebSocket = require("websocket").client;
const {Logger} = require("./logger");
class GatewayClient {
    constructor(token, client) {
        this.token = "Bot "+ token;
        this.client = client;
        this.logger = new Logger("websocket");
        this.s = null;
    }

    getWebSocketURL(){
        return "wss://gateway.discord.gg/?v=6&encoding=json";
    }

    start(){
        this.ws = new WebSocket();
        this.ws.connect(this.getWebSocketURL());
        this.ws.on("connect", (conn) => {
            this.logger.log("Connected to WS");
            this.client.conn = conn;
            conn.on("message", (message) => {
                var data = JSON.parse(message.utf8Data);
                this.logger.log("New message from websocket with op "+data["op"]);
                this.s = data["s"];
                switch(data["op"]) {
                case 10:
                    this.logger.log("Recieved OP 10 HELLO");
                    var heartbeat = data["d"]["heartbeat_interval"];
                    this.logger.log("Heartbeat is "+heartbeat);
                    conn.send(JSON.stringify({
                        "op": 2,
                        "d":{
                            "token": this.token,
                            "properties": {
                                "$os": "linux",
                                "$browser": "Dankcord.js",
                                "$device": "Dankcord.js"
                            },
                            "compress": false,
                            "large_threshold": 250,
                            "shard": [0, 1],
                            "presence": null
                        }
                    }));
                    this.logger.log("Sent identify payload");
                    setInterval(() => {
                        this.logger.log("Sending heartbeat");
                        conn.send(JSON.stringify({"op": 1, "d": this.s}));
                    }, heartbeat);

                    
                    break;
                case 0:
                    this.logger.log("Recieved event: "+ data["t"]);
                    break;
                case 11:
                    this.logger.log("Heartbeat acknowledged");
                    break;
                default:
                    this.logger.log("Unexpected opcode "+data["op"]);
                }
                
            });

            conn.on("close", (code, desc) => {
                this.logger.log("WebSocket closed with "+code+" and desc "+desc);
            });
        });
    }
}
exports.GatewayClient = GatewayClient;