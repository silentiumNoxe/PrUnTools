import * as Material from "./material.js";

class Worker {
    #type;
    #materials = [];

    constructor(type) {
        this.#type = type;
    }

    material(material, amount) {
        this.#materials.push({material, amount: amount / 100});
        return this;
    }

    getType() {
        return this.#type;
    }

    getMaterials() {
        return this.#materials;
    }
}

export const Pioneers = new Worker("PIO")
    .material(Material.COF, 0.5)
    .material(Material.DW, 4)
    .material(Material.RAT, 4)
    .material(Material.OVE, 0.5)
    .material(Material.PWO, 0.2)

export const Settlers = new Worker("SET")
    .material(Material.KOM, 1)
    .material(Material.DW, 5)
    .material(Material.RAT, 6)
    .material(Material.EXO, 0.5)
    .material(Material.PT, 0.5)
    .material(Material.REP, 0.2)