class Message {
    constructor(data, client){
        for(var i of Object.keys(data)){
            this[i] = data[i];
        }
        this.channel = client.channels.get(data["channel_id"]);
        this.content = data.content;

    }
}
exports.Message = Message;

class Client {
    constructor(data, client){
        for(var i of Object.keys(data)){
            this[i] = data[i]
        }
    }
}
exports.Client = Client;