import {Production, Worker} from "./constants.js";
import * as Material from "./material.js";
import Planet from "./planet.js";

class Factory {
    _materials = [];
    _workforce = [];

    constructor(ticker) {
        this._ticker = ticker;
    }

    /** @param planet {Planet} */
    getMaterials(planet=null) {
        if (!planet) {
            return this._materials;
        }

        const array = [...this._materials];

        if (planet.type === Planet.TYPE.ROCKY) {
            array.push({type: Material.MCG, amount: this._area * 4})
        } else if (planet.type === Planet.TYPE.GASEOUSE) {
            array.push({type: Material.AEF, amount: this._area / 3})
        }

        if (planet.atmosphere < 0.25) {
            array.push({type: Material.SEA, amount: this._area})
        } else if (planet.atmosphere > 2) {
            array.push({type: Material.HSE, amount: 1})
        }

        if (planet.gravity < 0.25) {
            array.push({type: Material.MGC, amount: 1})
        } else if (planet.gravity > 2.5) {
            array.push({type: Material.BL, amount: 1})
        }

        if (planet.temperature < -25) {
            array.push({type: Material.INS, amount: this._area * 10})
        } else if (planet.temperature > 75) {
            array.push({type: Material.TSH, amount: 1})
        }

        return array;
    }

    name(val) {
        this._name = val;
        return this;
    }

    material(type, amount) {
        this._materials.push({type, amount})
        return this;
    }

    area(val) {
        this._area = val;
        return this;
    }

    workforce(type, amount) {
        this._workforce.push({type, amount});
        return this;
    }

    expert(type) {
        this._expert = type;
        return this;
    }
}

export const COL = new Factory("COL")
    .name("Collector")
    .material(Material.BSE, 16)
    .area(15)
    .workforce(Worker.PIO, 50)
    .expert(Production.ResourceExtraction)

export const EXT = new Factory("EXT")
    .name("Extractor")
    .material(Material.BSE, 16)
    .area(25)
    .workforce(Worker.PIO, 60)
    .expert(Production.ResourceExtraction)

export const RIG = new Factory("RIG")
    .name("Rig")
    .material(Material.BSE, 12)
    .area(25)
    .workforce(Worker.PIO, 60)
    .expert(Production.ResourceExtraction)

export const BMP = new Factory("BMP")
    .name("Basic Material Plant")
    .material(Material.BSE, 6)
    .material(Material.BBH, 4)
    .material(Material.BDE, 2)
    .area(12)
    .workforce(Worker.PIO, 100)
    .expert(Production.Manufacturing)

export const FRM = new Factory("FRM")
    .name("Farmstead")
    .material(Material.BSE, 4)
    .material(Material.BBH, 4)
    .area(30)
    .workforce(Worker.PIO, 50)
    .expert(Production.Agriculture)

export const FP = new Factory("FP")
    .name("Food Processor")
    .material(Material.BSE, 3)
    .material(Material.BBH, 3)
    .material(Material.BDE, 3)
    .area(12)
    .workforce(Worker.PIO, 40)
    .expert(Production.FoodIndustries)

export const INC = new Factory("INC")
    .name("Incinerator")
    .material(Material.BSE, 4)
    .material(Material.BBH, 4)
    .material(Material.BTA, 1)
    .material(Material.BDE, 2)
    .area(10)
    .workforce(Worker.PIO, 40)
    .expert(Production.ResourceExtraction)

export const PP1 = new Factory("PP1")
    .name("Prefab Plant MK1")
    .material(Material.BSE, 4)
    .material(Material.BBH, 4)
    .material(Material.BDE, 3)
    .area(19)
    .workforce(Worker.PIO, 80)
    .expert(Production.Construction)

export const SME = new Factory("SME")
    .name("Smelter")
    .material(Material.BSE, 6)
    .material(Material.BBH, 4)
    .material(Material.BDE, 4)
    .area(17)
    .workforce(Worker.PIO, 50)
    .expert(Production.Metallurgy)

export const WEL = new Factory("WEL")
    .name("Welding Plant")
    .material(Material.BSE, 6)
    .material(Material.BBH, 8)
    .area(19)
    .workforce(Worker.PIO, 70)
    .expert(Production.Construction)

export const CHP = new Factory("CHP")
    .name("Chemical Plant")
    .material(Material.BSE, 3)
    .material(Material.BBH, 3)
    .material(Material.BDE, 3)
    .material(Material.TRU, 4)
    .area(18)
    .workforce(Worker.PIO, 20)
    .workforce(Worker.SET, 60)
    .expert(Production.Chemistry)

export const CLF = new Factory("CLF")
    .name("Textile Manufacturing")
    .material(Material.LSE, 2)
    .material(Material.LDE, 4)
    .material(Material.BSE, 2)
    .material(Material.TRU, 8)
    .area(37)
    .workforce(Worker.SET, 40)
    .expert(Production.Manufacturing)

export const EDM = new Factory("EDM")
    .name("Electronic Device Manufactory")
    .material(Material.LBH, 4)
    .material(Material.LDE, 4)
    .material(Material.LSE, 6)
    .material(Material.TRU, 4)
    .area(30)
    .workforce(Worker.SET, 50)
    .expert(Production.Electronics)

export const FER = new Factory("FER")
    .name("Fermenter")
    .material(Material.LBH, 2)
    .material(Material.LDE, 2)
    .material(Material.LSE, 2)
    .material(Material.TRU, 5)
    .area(25)
    .workforce(Worker.SET, 60)
    .expert(Production.FoodIndustries)

export const FS = new Factory("FS")
    .name("Metalist Studio")
    .material(Material.BBH, 2)
    .material(Material.LBH, 2)
    .material(Material.TRU, 4)
    .material(Material.LDE, 2)
    .area(25)
    .workforce(Worker.PIO, 50)
    .expert(Production.Metallurgy)

export const GF = new Factory("GF")
    .name("Glass Furnace")
    .material(Material.LSE, 6)
    .material(Material.LBH, 4)
    .material(Material.TRU, 5)
    .area(27)
    .workforce(Worker.SET, 80)
    .expert(Production.Metallurgy)

export const HYF = new Factory("HYF")
    .name("Hydroponics Farm")
    .material(Material.BSE, 2)
    .material(Material.LBH, 4)
    .material(Material.MHL, 16)
    .material(Material.TRU, 4)
    .area(15)
    .workforce(Worker.PIO, 40)
    .workforce(Worker.SET, 20)
    .expert(Production.Agriculture)

export const PPF = new Factory("PPF")
    .name("3D Printer")
    .material(Material.LBH, 4)
    .material(Material.BSE, 2)
    .material(Material.LDE, 2)
    .material(Material.TRU, 2)
    .area(16)
    .workforce(Worker.PIO, 50)
    .expert(Production.Manufacturing)

export const POL = new Factory("POL")
    .name("Polymer Plant")
    .material(Material.LBH, 8)
    .material(Material.BSE, 4)
    .material(Material.BDE, 4)
    .material(Material.TRU, 2)
    .area(15)
    .workforce(Worker.PIO, 10)
    .workforce(Worker.SET, 25)
    .expert(Production.Chemistry)

export const PP2 = new Factory("PP2")
    .name("Prefab Plant MK2")
    .material(Material.BBH, 6)
    .material(Material.BSE, 3)
    .material(Material.BDE, 6)
    .material(Material.TRU, 4)
    .area(25)
    .workforce(Worker.PIO, 25)
    .workforce(Worker.SET, 25)
    .expert(Production.Construction)

export const REF = new Factory("REF")
    .name("Refinery")
    .material(Material.BSE, 6)
    .material(Material.BBH, 6)
    .material(Material.BDE, 6)
    .area(25)
    .workforce(Worker.PIO, 60)
    .workforce(Worker.SET, 20)
    .expert(Production.FuelRefining)

export const UPF = new Factory("UPF")
    .name("Unit Prefab Plant")
    .material(Material.BBH, 8)
    .material(Material.BDE, 10)
    .material(Material.BSE, 10)
    .material(Material.BTA, 3)
    .material(Material.TRU, 8)
    .area(50)
    .workforce(Worker.PIO, 20)
    .workforce(Worker.SET, 50)
    .expert(Production.Construction)

export const WPL = new Factory("WPL")
    .name("Weaving Plant")
    .material(Material.LBH, 6)
    .material(Material.LSE, 3)
    .material(Material.BDE, 2)
    .material(Material.TRU, 6)
    .area(40)
    .workforce(Worker.SET, 70)
    .expert(Production.Manufacturing)