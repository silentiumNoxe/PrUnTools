import * as Factory from "./factory.js";
import * as Material from "./material.js";
import Duration from "./duration.js";

class Recipe {
    materials = [];
    amount = 0;
    target = null;
    duration = null;
    targetFactory = null;

    constructor(target, amount, duration) {
        this.target = target;
        this.amount = amount;
        this.duration = new Duration(duration);
    }

    material(type, amount) {
        this.materials.push({type, amount});
        return this;
    }

    factory(type) {
        this.targetFactory = type;
        return this;
    }
}

/** @return Recipe */
export const faster = function (recipe) {
    let found = recipe[0];
    for (const x of recipe) {
        if (x.less(found)) {
            found = x;
        }
    }
    return found;
}

// ----------------------Agricultural Products------------------------
export const FOD = [
    new Recipe(Material.FOD, 16, "12h")
        .factory(Factory.FP)
        .material(Material.NUT, 5)
        .material(Material.MAI, 5)
        .material(Material.VEG, 5)
]

export const HOP = [
    new Recipe(Material.HOP, 15, "1d 18h")
        .factory(Factory.ORC)
        .material(Material.H2O, 40)
        .material(Material.DDT, 2)
        .material(Material.SOI, 4),
    new Recipe(Material.HOP, 15, "2d")
        .factory(Factory.ORC)
        .material(Material.H2O, 60)
        .material(Material.DDT, 2)
]

export const CAF = [
    new Recipe(Material.CAF, 2, "6h")
        .factory(Factory.HYF)
        .material(Material.H2O, 22)
        .material(Material.NS, 3)
]

export const GRN = [
    new Recipe(Material.GRN, 4, "9h")
        .factory(Factory.FRM)
        .material(Material.H2O, 4),
    new Recipe(Material.GRN, 4, "12h")
        .factory(Factory.FRM)
        .material(Material.H2O, 1)
]

export const MAI = [
    new Recipe(Material.MAI, 12, "19h 12m")
        .factory(Factory.HYF)
        .material(Material.H2O, 20)
        .material(Material.NS, 2),
    new Recipe(Material.MAI, 12, "1d 10h")
        .factory(Factory.FRM)
        .material(Material.H2O, 4)
]

export const RCO = [
    new Recipe(Material.RCO, 2, "5h 17m")
        .factory(Factory.HYF)
        .material(Material.H2O, 10)
        .material(Material.NS, 4),
    new Recipe(Material.RCO, 1, "14h 24m")
        .factory(Factory.FRM)
        .material(Material.H2O, 2),
    new Recipe(Material.RCO, 2, "9h 36m")
        .factory(Factory.FRM)
        .material(Material.H2O, 2)
        .material(Material.NS, 4)
]

export const NUT = [
    new Recipe(Material.NUT, 12, "1d 12h")
        .factory(Factory.FRM)
        .material(Material.H2O, 1)
]

export const BEA = [
    new Recipe(Material.BEA, 2, "6h")
        .factory(Factory.FRM)
        .material(Material.H2O, 1),
    new Recipe(Material.BEA, 4, "9h 36m")
        .factory(Factory.FRM)
        .material(Material.H2O, 6)
]

export const VEG = [
    new Recipe(Material.VEG, 6, "4h 48m")
        .factory(Factory.HYF)
        .material(Material.H2O, 16)
        .material(Material.NS, 1),
    new Recipe(Material.VEG, 4, "10h 48m")
        .factory(Factory.FRM)
        .material(Material.H2O, 3)
]

// -----------------------Chemicals--------------------------------
export const NS = [
    new Recipe(Material.NS, 4, "4h 48m")
        .factory(Factory.CHP)
        .material(Material.H2O, 2)
        .material(Material.N, 2)
        .material(Material.LST, 1)
]

export const BL = [
    new Recipe(Material.BL, 2, "1d")
        .factory(Factory.LAB)
        .material(Material.F, 1)
        .material(Material.O, 1)
]

// --------------------- Construction Materials ----------------------
export const INS = [
    new Recipe(Material.INS, 20, "6h")
        .factory(Factory.PP3)
        .material(Material.PE, 100)
        .material(Material.AR, 1)
        .material(Material.THF, 1)
]

export const MCG = [
    new Recipe(Material.MCG, 50, "6h")
        .factory(Factory.BMP)
        .material(Material.LST, 4)
        .material(Material.SIO, 2)
]

export const SEA = [
    new Recipe(Material.SEA, 30, "7h 12m")
        .factory(Factory.BMP)
        .material(Material.S, 1)
        .material(Material.SI, 1)
        .material(Material.PG, 30)
]

// -------------------- Construction Parts ------------------------
export const AEF = [
    new Recipe(Material.AEF, 1, "12h")
        .factory(Factory.PP2)
        .material(Material.PG, 50)
        .material(Material.NE, 1)
]

export const MGC = [
    new Recipe(Material.MGC, 1, "1d 2h")
        .factory(Factory.PP3)
        .material(Material.MAG, 1)
        .material(Material.LDE, 1)
]

export const HSE = [
    new Recipe(Material.HSE, 2, "15h 36m")
        .factory(Factory.PP3)
        .material(Material.LSE, 2)
        .material(Material.TCS, 1)
]

export const TSH = [
    new Recipe(Material.TSH, 1, "14h 24m")
        .factory(Factory.PP4)
        .material(Material.PE, 150)
        .material(Material.LBH, 2)
        .material(Material.THP, 2)
]

export const TRU = [
    new Recipe(Material.TRU, 6, "4h 48m")
        .factory(Factory.WEL)
        .material(Material.AL, 2)
        .material(Material.HE, 1)
]

export const MHL = [
    new Recipe(Material.MHL, 1, "16h 48m")
        .factory(Factory.WEL)
        .material(Material.I, 1)
        .material(Material.FE, 1)
        .material(Material.HE, 1)
]

// ------------------- Construction Prefabs --------------------
export const BSE = [
    new Recipe(Material.BSE, 1, "6h")
        .factory(Factory.PP2)
        .material(Material.AL, 1)
        .material(Material.LST, 2),
    new Recipe(Material.BSE, 1, "6h")
        .factory(Factory.PP1)
        .material(Material.FE, 1)
        .material(Material.LST, 2)
]

export const BBH = [
    new Recipe(Material.BBH, 1, "6h")
        .factory(Factory.PP2)
        .material(Material.AL, 2)
        .material(Material.LST, 1),
    new Recipe(Material.BBH, 1, "7h 55m")
        .factory(Factory.PP1)
        .material(Material.FE, 2)
        .material(Material.LST, 1)
]

export const BDE = [
    new Recipe(Material.BDE, 1, "6h")
        .factory(Factory.PP2)
        .material(Material.PG, 75),
    new Recipe(Material.BDE, 1, "7h 12m")
        .factory(Factory.PP1)
        .material(Material.PE, 150)
]

export const BTA = [
    new Recipe(Material.BTA, 1, "3h 36m")
        .factory(Factory.PP2)
        .material(Material.GL, 1)
        .material(Material.AL, 1),
    new Recipe(Material.BTA, 1, "3h 36m")
        .factory(Factory.PP1)
        .material(Material.FE, 1)
        .material(Material.PE, 50)
]

export const LSE = [
    new Recipe(Material.LSE, 1, "6h")
        .factory(Factory.PP2)
        .material(Material.PG, 120)
        .material(Material.AL, 3)
]

export const LDE = [
    new Recipe(Material.LDE, 1, "6h")
        .factory(Factory.PP2)
        .material(Material.NL, 1)
        .material(Material.AL, 3)
]

export const LTA = [
    new Recipe(Material.LTA, 1, "6h")
        .factory(Factory.PP2)
        .material(Material.GL, 5)
        .material(Material.AL, 3)
]

export const LBH = [
    new Recipe(Material.LBH, 1, "6h")
        .factory(Factory.PP2)
        .material(Material.PE, 35)
        .material(Material.AL, 3)
]