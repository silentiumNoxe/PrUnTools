import * as Factory from "./factory.js";
import * as Material from "./material.js";
import Duration from "./duration.js";
import {EXT} from "./factory.js";

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

    /**
     * @param type {Material}
     * @param amount {number}
     * @return Recipe
     * */
    material(type, amount) {
        this.materials.push({type, amount});
        return this;
    }

    /**
     * @param type {Factory}
     * @return Recipe
     * */
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

export const AIR = [
    new Recipe(Material.AIR, 1, "2d 12h")
        .factory(Factory.APF)
        .material(Material.HCP, 1)
        .material(Material.NS, 1)
        .material(Material.H2O, 1)
        .material(Material.WAI, 1)
        .material(Material.PCB, 1)
        .material(Material.SAR, 1)
        .material(Material.GV, 1)
        .material(Material.FC, 1)
        .material(Material.BAC, 1)
]

export const DEC = [
    new Recipe(Material.DEC, 1, "12h")
        .factory(Factory.POL)
        .material(Material.PG, 150)
        .material(Material.EPO, 70)
]

export const FLO = [
    new Recipe(Material.FLO, 1, "19h 12m")
        .factory(Factory.FS)
        .material(Material.AL, 10)
        .material(Material.STL, 4)
]

export const FC = [
    new Recipe(Material.FC, 1, "9h 36m")
        .factory(Factory.WEL)
        .material(Material.AL, 1)
        .material(Material.BSE, 1)
        .material(Material.HE, 1)
]

export const FLP = [
    new Recipe(Material.FLP, 6, "12h")
        .factory(Factory.WEL)
        .material(Material.FE, 1)
        .material(Material.AL, 1)
        .material(Material.HE, 1)
]

export const GC = [
    new Recipe(Material.GC, 10, "7h 12m")
        .factory(Factory.WEL)
        .material(Material.FE, 1)
        .material(Material.AL, 1)
        .material(Material.HE, 1)
]

export const GV = [
    new Recipe(Material.GV, 1, "6h")
        .factory(Factory.WEL)
        .material(Material.AL, 1)
        .material(Material.HE, 1)
]

export const MGC = [
    new Recipe(Material.MGC, 1, "1d 2h")
        .factory(Factory.PP3)
        .material(Material.MAG, 1)
        .material(Material.LDE, 1)
]

export const MHL = [
    new Recipe(Material.MHL, 1, "16h 48m")
        .factory(Factory.WEL)
        .material(Material.I, 1)
        .material(Material.FE, 1)
        .material(Material.HE, 1)
]

export const LIT = [
    new Recipe(Material.LIT, 1, "19h 12m")
        .factory(Factory.GF)
        .material(Material.NE, 16)
        .material(Material.RG, 8)
]

export const PSH = [
    new Recipe(Material.PSH, 1, "9h 36m")
        .factory(Factory.PP3)
        .material(Material.TI, 1)
        .material(Material.NFI, 250)
]

export const TCS = [
    new Recipe(Material.TCS, 3, "12h")
        .factory(Factory.TNP)
        .material(Material.TC, 1)
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

// ------------------- Construction Prefabs --------------------
export const ABH = [
    new Recipe(Material.ABH, 2, "16h 48m")
        .factory(Factory.PP4)
        .material(Material.RBH, 2)
        .material(Material.NR, 125)
]

export const ADE = [
    new Recipe(Material.ADE, 2, "14h 24m")
        .factory(Factory.PP4)
        .material(Material.LDE, 2)
        .material(Material.KV, 2)
]

export const ASE = [
    new Recipe(Material.ASE, 1, "13h 12m")
        .factory(Factory.PP4)
        .material(Material.RSE, 1)
        .material(Material.TI, 2)
]

export const ATA = [
    new Recipe(Material.ATA, 1, "13h 12m")
        .factory(Factory.PP4)
        .material(Material.RTA, 1)
        .material(Material.NG, 1)
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

export const HSE = [
    new Recipe(Material.HSE, 2, "15h 36m")
        .factory(Factory.PP3)
        .material(Material.LSE, 2)
        .material(Material.TCS, 1)
]

export const LBH = [
    new Recipe(Material.LBH, 1, "6h")
        .factory(Factory.PP2)
        .material(Material.PE, 35)
        .material(Material.AL, 3)
]

export const LDE = [
    new Recipe(Material.LDE, 1, "6h")
        .factory(Factory.PP2)
        .material(Material.NL, 1)
        .material(Material.AL, 3)
]

export const LSE = [
    new Recipe(Material.LSE, 1, "6h")
        .factory(Factory.PP2)
        .material(Material.PG, 120)
        .material(Material.AL, 3)
]

export const LTA = [
    new Recipe(Material.LTA, 1, "6h")
        .factory(Factory.PP2)
        .material(Material.GL, 5)
        .material(Material.AL, 3)
]

export const RBH = [
    new Recipe(Material.RBH, 1, "9h 36m")
        .factory(Factory.PP3)
        .material(Material.BBH, 1)
        .material(Material.STL, 1)
        .material(Material.EPO, 50)
]

export const RDE = [
    new Recipe(Material.RDE, 2, "16h 48m")
        .factory(Factory.PP3)
        .material(Material.LDE, 1)
        .material(Material.EPO, 100)
        .material(Material.KV, 1)
]

export const RSE = [
    new Recipe(Material.RSE, 2, "16h 48m")
        .factory(Factory.PP3)
        .material(Material.BSE, 2)
        .material(Material.STL, 1)
        .material(Material.EPO, 225)
]

export const RTA = [
    new Recipe(Material.RTA, 1, "9h 36m")
        .factory(Factory.PP3)
        .material(Material.LTA, 1)
        .material(Material.RG, 6)
]

// -------------------------- Consumables (basic) ------------------------------
export const DW = [
    new Recipe(Material.DW, 7, "2h 24m")
        .factory(Factory.FP)
        .material(Material.H2O, 10),
    new Recipe(Material.DW, 10, "4h 48m")
        .factory(Factory.FP)
        .material(Material.H2O, 10)
        .material(Material.PG, 1)
]

export const HSS = [
    new Recipe(Material.HSS, 20, "1d")
        .factory(Factory.CLF)
        .material(Material.NL, 5)
        .material(Material.BLE, 1)
        .material(Material.SEN, 5)
        .material(Material.PCB, 5)
]

export const FIM = [
    new Recipe(Material.FIM, 2, "12h")
        .factory(Factory.FP)
        .material(Material.RAT, 2)
        .material(Material.HER, 1)
]

export const PDA = [
    new Recipe(Material.PDA, 32, "14h 24m")
        .factory(Factory.APF)
        .material(Material.HPC, 2)
        .material(Material.LD, 1)
]

export const OVE = [
    new Recipe(Material.OVE, 20, "14h 24m")
        .factory(Factory.BMP)
        .material(Material.PE, 100)
        .material(Material.PG, 25),
    new Recipe(Material.OVE, 20, "7h 12m")
        .factory(Factory.BMP)
        .material(Material.RCO, 1)
        .material(Material.PE, 50),
    new Recipe(Material.OVE, 30, "7h 12m")
        .factory(Factory.BMP)
        .material(Material.COT, 1)
        .material(Material.PG, 10)
]

export const RAT = [
    new Recipe(Material.RAT, 10, "6h")
        .factory(Factory.FP)
        .material(Material.GRN, 1)
        .material(Material.ALG, 1)
        .material(Material.VEG, 1),
    new Recipe(Material.RAT, 10, "6h")
        .factory(Factory.FP)
        .material(Material.GRN, 1)
        .material(Material.ALG, 1)
        .material(Material.NUT, 1),
    new Recipe(Material.RAT, 10, "6h")
        .factory(Factory.FP)
        .material(Material.MUS, 1)
        .material(Material.VEG, 1)
        .material(Material.GRN, 1),
    new Recipe(Material.RAT, 10, "6h")
        .factory(Factory.FP)
        .material(Material.MAI, 1)
        .material(Material.ALG, 1)
        .material(Material.VEG, 1),
    new Recipe(Material.RAT, 10, "6h")
        .factory(Factory.FP)
        .material(Material.MUS, 1)
        .material(Material.VEG, 1)
        .material(Material.MAI, 1),
    new Recipe(Material.RAT, 10, "6h")
        .factory(Factory.FP)
        .material(Material.MUS, 1)
        .material(Material.NUT, 1)
        .material(Material.GRN, 1),
    new Recipe(Material.RAT, 10, "6h")
        .factory(Factory.FP)
        .material(Material.MAI, 1)
        .material(Material.BEA, 1)
        .material(Material.NUT, 1),
    new Recipe(Material.RAT, 10, "6h")
        .factory(Factory.FP)
        .material(Material.MAI, 1)
        .material(Material.BEA, 1)
        .material(Material.VEG, 1),
    new Recipe(Material.RAT, 10, "6h")
        .factory(Factory.FP)
        .material(Material.MUS, 1)
        .material(Material.NUT, 1)
        .material(Material.MAI, 1),
    new Recipe(Material.RAT, 10, "6h")
        .factory(Factory.FP)
        .material(Material.GRN, 1)
        .material(Material.BEA, 1)
        .material(Material.NUT, 1),
    new Recipe(Material.RAT, 10, "6h")
        .factory(Factory.FP)
        .material(Material.MAI, 1)
        .material(Material.ALG, 1)
        .material(Material.NUT, 1),
    new Recipe(Material.RAT, 10, "6h")
        .factory(Factory.FP)
        .material(Material.GRN, 1)
        .material(Material.BEA, 1)
        .material(Material.VEG, 1),
]

export const LC = [
    new Recipe(Material.LC, 10, "19h 12m")
        .factory(Factory.CLF)
        .material(Material.SIL, 2)
        .material(Material.BLE, 1)
        .material(Material.HD, 10)
        .material(Material.PCB, 10)
]

export const MEA = [
    new Recipe(Material.MEA, 2, "15h 36m")
        .factory(Factory.FP)
        .material(Material.FIM, 2)
        .material(Material.MTP, 1)
]

export const WS = [
    new Recipe(Material.WS, 20, "1d 19h")
        .factory(Factory.APF)
        .material(Material.DA, 1)
        .material(Material.BWS, 1)
]

export const EXO = [
    new Recipe(Material.EXO, 10, "4h 5m")
        .factory(Factory.BMP)
        .material(Material.OVE, 10)
        .material(Material.AL, 1)
        .material(Material.MFK, 1),
    new Recipe(Material.EXO, 10, "3h 36m")
        .factory(Factory.BMP)
        .material(Material.OVE, 10)
        .material(Material.AL, 1)
        .material(Material.SWF, 1)
]

export const PT = [
    new Recipe(Material.PT, 7, "8h 24m")
        .factory(Factory.BMP)
        .material(Material.STL, 1)
        .material(Material.TRN, 1),
    new Recipe(Material.PT, 5, "8h 24m")
        .factory(Factory.BMP)
        .material(Material.STL, 1),
    new Recipe(Material.PT, 10, "8h 24m")
        .factory(Factory.BMP)
        .material(Material.STL, 1)
        .material(Material.W, 1)
]

export const HMS = [
    new Recipe(Material.HMS, 10, "16h 48m")
        .factory(Factory.CLF)
        .material(Material.NL, 1)
        .material(Material.IND, 1)
        .material(Material.GC, 6)
]

export const MED = [
    new Recipe(Material.MED, 16, "19h 12m")
        .factory(Factory.CHP)
        .material(Material.PE, 50)
        .material(Material.AL, 1)
        .material(Material.COT, 4)
        .material(Material.HER, 1)
]

export const SCN = [
    new Recipe(Material.SCN, 8, "1d 5h")
        .factory(Factory.EDM)
        .material(Material.PE, 100)
        .material(Material.CU, 4)
]

// -------------------------- Consumables (luxury) ------------------------------
export const GIN = [
    new Recipe(Material.GIN, 4, "15h 36m")
        .factory(Factory.FER)
        .material(Material.GRN, 2)
        .material(Material.DW, 2)
        .material(Material.ES, 1)
        .material(Material.AMM, 1)
]

export const VG = [
    new Recipe(Material.VG, 20, "1d")
        .factory(Factory.IVP)
        .material(Material.VIT, 2)
        .material(Material.REA, 4)
        .material(Material.BAC, 2)
        .material(Material.BL, 2)
]

export const PWO = [
    new Recipe(Material.PWO, 20, "7h 12m")
        .factory(Factory.BMP)
        .material(Material.COT, 1)
        .material(Material.PG, 50)
]

export const COF = [
    new Recipe(Material.COF, 3, "7h 12m")
        .factory(Factory.FP)
        .material(Material.CAF, 1)
        .material(Material.DW, 3)
]

export const WIN = [
    new Recipe(Material.WIN, 10, "19h 12m")
        .factory(Factory.FER)
        .material(Material.DW, 20)
        .material(Material.GRA, 15)
        .material(Material.REA, 15)
        .material(Material.AMM, 1)
]

export const NST = [
    new Recipe(Material.NST, 4, "12h")
        .factory(Factory.LAB)
        .material(Material.ES, 1)
        .material(Material.ALG, 1)
        .material(Material.THF, 1)
]

export const KOM = [
    new Recipe(Material.KOM, 6, "8h 24m")
        .factory(Factory.FER)
        .material(Material.DW, 4)
        .material(Material.HER, 1)
        .material(Material.AMM, 1)
]

export const REP = [
    new Recipe(Material.REP, 4, "6h")
        .factory(Factory.BMP)
        .material(Material.MFK, 1)
        .material(Material.SFK, 1)
        .material(Material.INS, 8)
]

export const ALE = [
    new Recipe(Material.ALE, 6, "15h 22m")
        .factory(Factory.FER)
        .material(Material.GRN, 2)
        .material(Material.DW, 3)
        .material(Material.HOP, 1)
        .material(Material.AMM, 1)
]

export const SC = [
    new Recipe(Material.SC, 20, "15h 36m")
        .factory(Factory.CHP)
        .material(Material.CA, 2)
        .material(Material.MG, 1)
        .material(Material.TA, 1)
]

// -------------------- Elements ------------------------
export const BE = [
    new Recipe(Material.BE, 1, "2h 24m")
        .factory(Factory.AML)
        .material(Material.BER, 2)
]

export const CA = [
    new Recipe(Material.CA, 1, "7h 12m")
        .factory(Factory.CHP)
        .material(Material.LST, 1)
]

export const C = [
    new Recipe(Material.C, 4, "1d")
        .factory(Factory.INC)
        .material(Material.HCP, 4),
    new Recipe(Material.C, 4, "1d")
        .factory(Factory.INC)
        .material(Material.MAI, 4),
    new Recipe(Material.C, 4, "15h 50m")
        .factory(Factory.INC)
        .material(Material.HCP, 4)
        .material(Material.MAI, 2),
    new Recipe(Material.C, 4, "1d")
        .factory(Factory.INC)
        .material(Material.GRN, 4),
    new Recipe(Material.C, 4, "15h 50m")
        .factory(Factory.INC)
        .material(Material.HCP, 4)
        .material(Material.GRN, 2),
    new Recipe(Material.C, 4, "7h 55m")
        .factory(Factory.INC)
        .material(Material.HCP, 4)
        .material(Material.GRN, 2)
        .material(Material.MAI, 2)
]

export const CL = [
    new Recipe(Material.CL, 2, "13h 55m")
        .factory(Factory.CHP)
        .material(Material.HAL, 3)
        .material(Material.H2O, 1)
]

export const ES = [
    new Recipe(Material.ES, 10, "12h")
        .factory(Factory.EEP)
        .material(Material.LES, 1)
]

export const I = [
    new Recipe(Material.I, 1, "4h 48m")
        .factory(Factory.BMP)
        .material(Material.CLI, 3)
]

export const MG = [
    new Recipe(Material.MG, 6, "2h 53m")
        .factory(Factory.BMP)
        .material(Material.MGS, 1)
]

export const NA = [
    new Recipe(Material.NA, 2, "13h 55m")
        .factory(Factory.CHP)
        .material(Material.HAL, 3)
        .material(Material.H2O, 1)
]

export const S = [
    new Recipe(Material.S, 6, "7h 12m")
        .factory(Factory.SME)
        .material(Material.SCR, 1)
        .material(Material.O, 1)
]

export const TA = [
    new Recipe(Material.TA, 1, "15h 36m")
        .factory(Factory.AML)
        .material(Material.TAI, 2)
]

export const TC = [
    new Recipe(Material.TC, 1, "16h 19m")
        .factory(Factory.TNP)
        .material(Material.TCO, 1)
]

export const ZR = [
    new Recipe(Material.ZR, 1, "14h 24m")
        .factory(Factory.AML)
        .material(Material.ZIR, 2)
]

// -------------------- Fuels --------------------------
export const FF = [
    new Recipe(Material.FF, 100, "3h 36m")
        .factory(Factory.REF)
        .material(Material.HE3, 2)
        .material(Material.H, 4)
]

export const SF = [
    new Recipe(Material.SF, 150, "9h 36m")
        .factory(Factory.REF)
        .material(Material.AMM, 1)
        .material(Material.NAB, 5),
    new Recipe(Material.SF, 100, "3h 36m")
        .factory(Factory.REF)
        .material(Material.AMM, 1)
        .material(Material.GAL, 2)
        .material(Material.H, 3)
]

// -------------------- Gases ----------------------------
export const AMM = [
    new Recipe(Material.AMM, 60, "1d")
        .factory(Factory.COL),
    new Recipe(Material.AMM, 60, "1d")
        .factory(Factory.EXT),
    new Recipe(Material.AMM, 60, "1d")
        .factory(Factory.RIG),
]

export const AR = [
    new Recipe(Material.AR, 60, "1d")
        .factory(Factory.COL),
    new Recipe(Material.AR, 60, "1d")
        .factory(Factory.EXT),
    new Recipe(Material.AR, 60, "1d")
        .factory(Factory.RIG),
]

export const F = [
    new Recipe(Material.F, 60, "1d")
        .factory(Factory.COL),
    new Recipe(Material.F, 60, "1d")
        .factory(Factory.EXT),
    new Recipe(Material.F, 60, "1d")
        .factory(Factory.RIG),
]

export const HE = [
    new Recipe(Material.HE, 60, "1d")
        .factory(Factory.COL),
    new Recipe(Material.HE, 60, "1d")
        .factory(Factory.EXT),
    new Recipe(Material.HE, 60, "1d")
        .factory(Factory.RIG),
]

export const HE3 = [
    new Recipe(Material.HE3, 60, "1d")
        .factory(Factory.COL),
    new Recipe(Material.HE3, 60, "1d")
        .factory(Factory.EXT),
    new Recipe(Material.HE3, 60, "1d")
        .factory(Factory.RIG),
]

export const H = [
    new Recipe(Material.H, 60, "1d")
        .factory(Factory.COL),
    new Recipe(Material.H, 60, "1d")
        .factory(Factory.EXT),
    new Recipe(Material.H, 60, "1d")
        .factory(Factory.RIG),
]

export const NE = [
    new Recipe(Material.NE, 60, "1d")
        .factory(Factory.COL),
    new Recipe(Material.NE, 60, "1d")
        .factory(Factory.EXT),
    new Recipe(Material.NE, 60, "1d")
        .factory(Factory.RIG),
]

export const N = [
    new Recipe(Material.N, 60, "1d")
        .factory(Factory.COL),
    new Recipe(Material.N, 60, "1d")
        .factory(Factory.EXT),
    new Recipe(Material.N, 60, "1d")
        .factory(Factory.RIG),
]

export const O = [
    new Recipe(Material.O, 60, "1d")
        .factory(Factory.COL),
    new Recipe(Material.O, 60, "1d")
        .factory(Factory.EXT),
    new Recipe(Material.O, 60, "1d")
        .factory(Factory.RIG),
]

// --------------------- Liquids -------------------
export const HEX = [
    new Recipe(Material.HEX, 70, "1d")
        .factory(Factory.COL),
    new Recipe(Material.HEX, 70, "1d")
        .factory(Factory.EXT),
    new Recipe(Material.HEX, 70, "1d")
        .factory(Factory.RIG),
]

export const LES = [
    new Recipe(Material.LES, 70, "1d")
        .factory(Factory.COL),
    new Recipe(Material.LES, 70, "1d")
        .factory(Factory.EXT),
    new Recipe(Material.LES, 70, "1d")
        .factory(Factory.RIG),
]

export const BTS = [
    new Recipe(Material.BTS, 70, "1d")
        .factory(Factory.COL),
    new Recipe(Material.BTS, 70, "1d")
        .factory(Factory.EXT),
    new Recipe(Material.BTS, 70, "1d")
        .factory(Factory.RIG),
]

export const H2O = [
    new Recipe(Material.H2O, 70, "1d")
        .factory(Factory.COL),
    new Recipe(Material.H2O, 70, "1d")
        .factory(Factory.EXT),
    new Recipe(Material.H2O, 70, "1d")
        .factory(Factory.RIG),
]

// ------------------- Metals -----------------------