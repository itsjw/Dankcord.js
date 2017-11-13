class Message {
    constructor(data, client){
        this.channel = client.channels.get(data["channel_id"]);
        this.content = data.content;
    }
}
exports.Message = Message;