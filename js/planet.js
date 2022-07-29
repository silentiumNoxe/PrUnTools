import * as Material from "./material.js";

export default class Planet {
    static TYPE = {
        ROCKY: "rocky",
        GASEOUSE: "gaseouse"
    }

    id;
    /** @type TYPE*/
    _type;
    _pressure;
    _gravity;
    _temperature;
    _fertility;
    #resources = [];

    constructor(id) {
        this.id = id;
    }

    type(val) {
        this._type = val;
        return this;
    }

    pressure(val) {
        this._pressure = val;
        return this;
    }

    gravity(val) {
        this._gravity = val;
        return this;
    }

    temperature(val) {
        this._temperature = val;
        return this;
    }

    fertility(val) {
        this._fertility = val;
        return this;
    }

    /** @param val {PlanetResource}*/
    resource(val) {
        this.#resources.push(val);
        return this;
    }

    getFertility() {
        return this._fertility * (10/33);
    }

    getRawFertility() {
        return this._fertility;
    }

    /** @return Array<PlanetResource>*/
    getResources() {
        return this.#resources;
    }
}

class PlanetResource {
    static TYPE = {
        ATMOSPHERIC: "Atmospheric",
        LIQUID: "Liquid",
        MINERAL: "Mineral"
    }

    /** @type Material*/
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

export const UV796b = new Planet()
    .type(Planet.TYPE.ROCKY)
    .fertility(0.22)
    .gravity(1.04)
    .temperature(20.19)
    .pressure(1.19)
    .resource(new PlanetResource(Material.O, 0.21, PlanetResource.TYPE.ATMOSPHERIC))
    .resource(new PlanetResource(Material.H2O, 0.12, PlanetResource.TYPE.LIQUID))
    .resource(new PlanetResource(Material.LST, 0.31, PlanetResource.TYPE.MINERAL))
export const Proxion = UV796b;