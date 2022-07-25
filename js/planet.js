export default class Planet {
    static TYPE = {
        ROCKY: "rocky",
        GASEOUSE: "gaseouse"
    }

    /** @type TYPE*/
    _type;
    _atmosphere;
    _gravity;
    _temperature;
    _fertility;
    #resources;

    constructor() {
    }

    setResource(mat) {

    }

    get type() {
        return this._type;
    }

    get atmosphere() {
        return this._atmosphere;
    }

    get gravity() {
        return this._gravity;
    }

    get temperature() {
        return this._temperature;
    }

    get rawFertility() {
        return this._fertility;
    }

    get fertility() {
        return this.rawFertility * (10/33);
    }

    get resources() {
        return this.#resources || [];
    }
}

class PlanetResource {
    static TYPE = {
        ATMOSPHERIC: "Atmospheric",
        LIQUID: "Liquid",
        MINERAL: "Mineral"
    }

    #material;
    #concentration;
    #type;

    constructor(material, concentration, type) {
        this.#material = material;
        this.#concentration = concentration;
        this.#type = type;
    }

    get material() {
        return this.#material;
    }

    get concentration() {
        return this.#concentration;
    }

    get type() {
        return this.#type;
    }
}

export const dailyExtraction = function (planet) {

}