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

export const VEG = [
    new Recipe(Material.VEG, 6, "4h 48m")
        .factory(Factory.HYF)
        .material(Material.H2O, 16)
        .material(Material.NS, 1),
    new Recipe(Material.VEG, 4, "10h 48m")
        .factory(Factory.FRM)
        .material(Material.H2O, 3)
]

export const GRA = [
    new Recipe(Material.GRA, 5, "19h 12m")
        .factory(Factory.ORC)
        .material(Material.H2O, 30)
        .material(Material.DDT, 1)
        .material(Material.SOI, 3),
    new Recipe(Material.GRA, 5, "1d")
        .factory(Factory.ORC)
        .material(Material.H2O, 40)
        .material(Material.DDT, 1)
]

export const HER = [
    new Recipe(Material.HER, 4, "2d")
        .factory(Factory.FRM)
        .material(Material.H2O, 4)
        .material(Material.DDT, 1)
]

export const HCP = [
    new Recipe(Material.HCP, 8, "9h 36m")
        .factory(Factory.HYF)
        .material(Material.H2O, 14)
        .material(Material.NS, 1),
    new Recipe(Material.HCP, 4, "12h")
        .factory(Factory.FRM)
        .material(Material.H2O, 4)
]

export const MTP = [
    new Recipe(Material.MTP, 4, "18h")
        .factory(Factory.IVP)
        .material(Material.PPA, 1)
        .material(Material.NS, 1)
        .material(Material.HCP, 1)
]

export const MUS = [
    new Recipe(Material.MUS, 12, "12h")
        .factory(Factory.HYF)
        .material(Material.NS, 4),
    new Recipe(Material.MUS, 4, "7h 12m")
        .factory(Factory.HYF)
        .material(Material.NS, 1)
]

export const PIB = [
    new Recipe(Material.PIB, 10, "15h 36m")
        .factory(Factory.ORC)
        .material(Material.H2O, 20)
        .material(Material.DDT, 1)
        .material(Material.SOI, 2),
    new Recipe(Material.PIB, 10, "19h 12m")
        .factory(Factory.ORC)
        .material(Material.H2O, 30)
        .material(Material.DDT, 1)
]

export const ALG = [
    new Recipe(Material.ALG, 12, "10h 48m")
        .factory(Factory.HYF)
        .material(Material.H2O, 16)
        .material(Material.NS, 2)
]

export const BEA = [
    new Recipe(Material.BEA, 2, "6h")
        .factory(Factory.FRM)
        .material(Material.H2O, 1),
    new Recipe(Material.BEA, 4, "9h 36m")
        .factory(Factory.FRM)
        .material(Material.H2O, 6)
]

export const PPA = [
    new Recipe(Material.PPA, 4, "7h 12m")
        .factory(Factory.FP)
        .material(Material.BEA, 2)
        .material(Material.H2O, 1),
    new Recipe(Material.PPA, 6, "12h")
        .factory(Factory.FP)
        .material(Material.ALG, 1)
        .material(Material.H2O, 1)
        .material(Material.BEA, 1),
    new Recipe(Material.PPA, 4, "7h 12m")
        .factory(Factory.FP)
        .material(Material.ALG, 2)
        .material(Material.H2O, 1)
]

export const RSI = [
    new Recipe(Material.RSI, 8, "1d")
        .factory(Factory.IVP)
        .material(Material.H2O, 16)
        .material(Material.HCP, 1)
        .material(Material.NS, 1)
]

export const VIT = [
    new Recipe(Material.VIT, 20, "19h 12m")
        .factory(Factory.FER)
        .material(Material.DW, 10)
        .material(Material.PIB, 4)
        .material(Material.CA, 1)
        .material(Material.I, 1)
        .material(Material.AMM, 1)
]

// ----------------------- Alloys -------------------------------
export const FAL = [
    new Recipe(Material.FAL, 6, "9h 36m")
        .factory(Factory.ASM)
        .material(Material.AL, 3)
        .material(Material.FE, 3)
]

export const AST = [
    new Recipe(Material.AST, 4, "9h 36m")
        .factory(Factory.ASM)
        .material(Material.AL, 1)
        .material(Material.TI, 3)
]

export const BOS = [
    new Recipe(Material.BOS, 4, "12h")
        .factory(Factory.AML)
        .material(Material.BOB, 1)
        .material(Material.SI, 1)
        .material(Material.AL, 4)
]

export const BRO = [
    new Recipe(Material.BRO, 3, "9h 36m")
        .factory(Factory.FS)
        .material(Material.AL, 1)
        .material(Material.CU, 2)
]

export const RGO = [
    new Recipe(Material.RGO, 5, "9h 36m")
        .factory(Factory.FS)
        .material(Material.AU, 4)
        .material(Material.CU, 1)
]

export const BGO = [
    new Recipe(Material.BGO, 5, "9h 36m")
        .factory(Factory.FS)
        .material(Material.AU, 4)
        .material(Material.FE, 1)
]

export const FET = [
    new Recipe(Material.FET, 4, "9h 36m")
        .factory(Factory.ASM)
        .material(Material.FE, 1)
        .material(Material.TI, 3)
]

export const WAL = [
    new Recipe(Material.WAL, 4, "9h 36m")
        .factory(Factory.ASM)
        .material(Material.W, 1)
        .material(Material.AL, 3)
]

// -----------------------Chemicals--------------------------------
export const SIO = [
    new Recipe(Material.SIO, 16, "1d")
        .factory(Factory.CHP)
        .material(Material.CLI, 10)
        .material(Material.BRM, 20)
]

export const BAC = [
    new Recipe(Material.BAC, 10, "2d 5h")
        .factory(Factory.LAB)
        .material(Material.HCP, 1)
        .material(Material.O, 1)
        .material(Material.S, 1)
]

export const BLE = [
    new Recipe(Material.BLE, 4, "19h 12m")
        .factory(Factory.LAB)
        .material(Material.NAB, 10)
        .material(Material.S, 3)
        .material(Material.O, 2),
    new Recipe(Material.BLE, 3, "12h")
        .factory(Factory.LAB)
        .material(Material.NA, 1)
        .material(Material.CL, 1)
        .material(Material.O, 1)
]

export const BL = [
    new Recipe(Material.BL, 2, "1d")
        .factory(Factory.LAB)
        .material(Material.F, 1)
        .material(Material.O, 1)
]

export const REA = [
    new Recipe(Material.REA, 10, "16h 48m")
        .factory(Factory.CHP)
        .material(Material.BRM, 25)
]

export const CST = [
    new Recipe(Material.CST, 3, "1d 12h")
        .factory(Factory.LAB)
        .material(Material.NS, 1)
        .material(Material.DW, 1)
]

export const EES = [
    new Recipe(Material.EES, 1, "1d 5h")
        .factory(Factory.EEP)
        .material(Material.ES, 1)
        .material(Material.REA, 4)
        .material(Material.FLX, 4)
]

export const ETC = [
    new Recipe(Material.ETC, 1, "19h 12m")
        .factory(Factory.TNP)
        .material(Material.TC, 1)
        .material(Material.REA, 4)
        .material(Material.FLX, 4)
]

export const FLX = [
    new Recipe(Material.FLX, 10, "12h")
        .factory(Factory.CHP)
        .material(Material.LST, 1)
]

export const IND = [
    new Recipe(Material.IND, 1, "9h 36m")
        .factory(Factory.CHP)
        .material(Material.MG, 1)
        .material(Material.CU, 1)
        .material(Material.S, 1)
]

export const LCR = [
    new Recipe(Material.LCR, 1, "15h 36m")
        .factory(Factory.CHP)
        .material(Material.SI, 1)
        .material(Material.O, 1)
]

export const NR = [
    new Recipe(Material.NR, 50, "19h 12m")
        .factory(Factory.LAB)
        .material(Material.EPO, 50)
        .material(Material.NCS, 75)
]

export const NS = [
    new Recipe(Material.NS, 4, "4h 48m")
        .factory(Factory.CHP)
        .material(Material.H2O, 2)
        .material(Material.N, 2)
        .material(Material.LST, 1)
]

export const OLF = [
    new Recipe(Material.OLF, 6, "9h 36m")
        .factory(Factory.CHP)
        .material(Material.VEG, 6)
        .material(Material.REA, 10)
]

export const DDT = [
    new Recipe(Material.DDT, 3, "18h")
        .factory(Factory.LAB)
        .material(Material.C, 1)
        .material(Material.H, 1)
        .material(Material.CL, 1)
]

export const PFE = [
    new Recipe(Material.PFE, 10, "19h 12m")
        .factory(Factory.CHP)
        .material(Material.AMM, 10)
        .material(Material.REA, 4)
]

export const JUI = [
    new Recipe(Material.JUI, 30, "9h 36m")
        .factory(Factory.LAB)
        .material(Material.HEX, 10)
        .material(Material.BL, 5)
        .material(Material.CST, 5)
        .material(Material.PK, 1)
]

export const NAB = [
    new Recipe(Material.NAB, 20, "7h 12m")
        .factory(Factory.CHP)
        .material(Material.NA, 1)
        .material(Material.BOB, 1)
        .material(Material.H, 5)
]

export const TCL = [
    new Recipe(Material.TCL, 3, "14h 24m")
        .factory(Factory.LAB)
        .material(Material.CL, 1)
        .material(Material.O, 1)
        .material(Material.H, 1)
]

export const THF = [
    new Recipe(Material.THF, 20, "1d")
        .factory(Factory.LAB)
        .material(Material.AMM, 4)
        .material(Material.H2O, 4)
        .material(Material.NA, 4)
]

// --------------------- Construction Materials ----------------------
export const EPO = [
    new Recipe(Material.EPO, 50, "1d")
        .factory(Factory.POL)
        .material(Material.C, 1)
        .material(Material.H, 1)
        .material(Material.CL, 1)
        .material(Material.O, 1)
]

export const INS = [
    new Recipe(Material.INS, 20, "6h")
        .factory(Factory.PP3)
        .material(Material.PE, 100)
        .material(Material.AR, 1)
        .material(Material.THF, 1)
]

export const MTC = [
    new Recipe(Material.MTC, 2, "9h 36m")
        .factory(Factory.CLR)
        .material(Material.NCS, 2)
]

export const MCG = [
    new Recipe(Material.MCG, 50, "6h")
        .factory(Factory.BMP)
        .material(Material.LST, 4)
        .material(Material.SIO, 2)
]

export const NCS = [
    new Recipe(Material.NCS, 100, "14h 24m")
        .factory(Factory.CLR)
        .material(Material.C, 1)
]

export const NFI = [
    new Recipe(Material.NFI, 1200, "19h 12m")
        .factory(Factory.CLR)
        .material(Material.C, 10)
        .material(Material.SI, 2)
]

export const NG = [
    new Recipe(Material.NG, 10, "1d 5h")
        .factory(Factory.GF)
        .material(Material.GL, 10)
        .material(Material.NCS, 10)
]

export const RG = [
    new Recipe(Material.RG, 10, "1d 7h")
        .factory(Factory.GF)
        .material(Material.GL, 10)
        .material(Material.PG, 15),
    new Recipe(Material.RG, 10, "1d 4h")
        .factory(Factory.GF)
        .material(Material.GL, 10)
        .material(Material.PG, 15)
        .material(Material.SEN, 1)
]

export const SEA = [
    new Recipe(Material.SEA, 30, "7h 12m")
        .factory(Factory.BMP)
        .material(Material.S, 1)
        .material(Material.SI, 1)
        .material(Material.PG, 30)
]

export const GL = [
    new Recipe(Material.GL, 10, "16h 48m")
        .factory(Factory.GF)
        .material(Material.SIO, 1),
    new Recipe(Material.GL, 10, "13h 12m")
        .factory(Factory.GF)
        .material(Material.SIO, 1)
        .material(Material.SEN, 1)
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