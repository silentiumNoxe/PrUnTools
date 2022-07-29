import * as Material from "./material.js";

export default class Planet {
    static TYPE = {
        ROCKY: "rocky",
        GASEOUSE: "gaseouse"
    }

    address;
    name;
    /** @type TYPE*/
    _type;
    _pressure;
    _gravity;
    _temperature;
    _fertility;
    #resources = [];

    constructor(address, name) {
        this.address = address;
        this.name = name;
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

export const UV796b = new Planet("UV-796b", "Proxion")
    .type(Planet.TYPE.ROCKY)
    .fertility(0.22)
    .gravity(1.04)
    .temperature(20.19)
    .pressure(1.19)
    .resource(new PlanetResource(Material.O, 0.21, PlanetResource.TYPE.ATMOSPHERIC))
    .resource(new PlanetResource(Material.H2O, 0.12, PlanetResource.TYPE.LIQUID))
    .resource(new PlanetResource(Material.LST, 0.31, PlanetResource.TYPE.MINERAL))
export const Proxion = UV796b;

export const JS952c = new Planet("JS-952c", "Gibson")
    .type(Planet.TYPE.ROCKY)
    .fertility(-0.24)
    .gravity(0.77)
    .temperature(33.04)
    .pressure(0.95)
    .resource(new PlanetResource(Material.O, 0.16, PlanetResource.TYPE.ATMOSPHERIC))
    .resource(new PlanetResource(Material.H2O, 0.19, PlanetResource.TYPE.LIQUID))
    .resource(new PlanetResource(Material.FEO, 0.18, PlanetResource.TYPE.MINERAL))
    .resource(new PlanetResource(Material.H, 0.07, PlanetResource.TYPE.ATMOSPHERIC))
export const Gibson = JS952c;