export default class Ticker {
    constructor(material, bid, ask, timestamp=new Date()) {
        this.material = material;
        this.bid = bid;
        this.ask = ask;
        this.timestamp = timestamp;
    }
}