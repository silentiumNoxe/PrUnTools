export default class PlanetFee {
    #type;
    #pio;
    #set;
    #tec;
    #eng;
    #sci;

    constructor(type, values) {
        this.#type = type;
        this.#pio = values.pio;
        this.#set = values.set;
        this.#tec = values.tec;
        this.#eng = values.eng;
        this.#sci = values.sci;
    }

    get type() {
        return this.#type;
    }

    get pio() {
        return this.#pio;
    }

    get set() {
        return this.#set;
    }

    get tec() {
        return this.#tec;
    }

    get eng() {
        return this.#eng;
    }

    get sci() {
        return this.#sci;
    }

    get toMap() {
        return {
            pio: this.pio,
            set: this.set,
            tec: this.tec,
            eng: this.eng,
            sci: this.sci
        }
    }
}