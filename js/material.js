import {Production} from "./constants.js";

class Material {
    _natural = false;
    _volume = 1;

    constructor(ticker) {
        this.ticker = ticker;
    }

    getWeight(ton = false) {
        if (ton) {
            return this._weight / 1000;
        }

        return this._weight;
    }

    name(val) {
        this._name = val;
        return this;
    }

    weight(val) {
        this._weight = val;
        return this;
    }

    volume(val) {
        this._volume = val;
        return this;
    }

    natural(val) {
        this._natural = val;
        return this;
    }

    category(val) {
        this._category = val;
        return this;
    }
}

// ----------------------Agricultural Products------------------------

export const FOD = new Material("FOD")
    .name("All-Purpose Fodder")
    .weight(1200)
    .category(Production.Agriculture)

export const HOP = new Material("HOP")
    .name("Flowery Hops")
    .weight(350)
    .category(Production.Agriculture)

export const CAF = new Material("CAF")
    .name("Caffeinated Beans")
    .weight(860)
    .category(Production.Agriculture)

export const GRN = new Material("GRN")
    .name("High-Carb Grains")
    .weight(900)
    .category(Production.Agriculture)

export const MAI = new Material("MAI")
    .name("High-Carb Maize")
    .weight(1300)
    .category(Production.Agriculture)

export const RCO = new Material("RCO")
    .name("Raw Cotton Fiber")
    .weight(950)
    .category(Production.Agriculture)

export const NUT = new Material("NUT")
    .name("Triglyceride Nuts")
    .weight(900)
    .category(Production.Agriculture)

export const BEA = new Material("BEA")
    .name("Protein-Rich Beans")
    .weight(800)
    .category(Production.Agriculture)

export const VEG = new Material("VEG")
    .name("Triglyceride Fruits")
    .weight(1100)
    .category(Production.Agriculture)

export const GRA = new Material("GRA")
    .name("Wine-Quality Grapes")
    .weight(1100)
    .category(Production.Agriculture)

export const HER = new Material("HER")
    .name("Spicy Herbs")
    .weight(400)
    .category(Production.Agriculture)

export const HCP = new Material("HCP")
    .name("Hydrocarbon Plants")
    .weight(800)
    .category(Production.Agriculture)

export const MTP = new Material("MTP")
    .name("Meat Tissue Patties")
    .weight(700)
    .category(Production.Agriculture)

export const MUS = new Material("MUS")
    .name("Protein-Rich Mushrooms")
    .weight(800)
    .category(Production.Agriculture)

export const PIB = new Material("PIB")
    .name("Pineberries")
    .weight(300)
    .category(Production.Agriculture)

export const ALG = new Material("ALG")
    .name("Protein-Rich Algae")
    .weight(700)
    .category(Production.Agriculture)

export const PPA = new Material("PPA")
    .name("Protein Paste")
    .weight(2000)
    .category(Production.Agriculture)

export const RSI = new Material("RSI")
    .name("Raw Silk Strains")
    .weight(1100)
    .category(Production.Agriculture)

export const VIT = new Material("VIT")
    .name("Vita Essence")
    .weight(900)
    .category(Production.Agriculture)

// -----------------------Chemicals--------------------------------
export const NS = new Material("NS")
    .name("Nutrient Solution")
    .weight(600)
    .volume(0.5)

export const BL = new Material("BL")
    .name("Breathable Liquid")
    .weight(1120)
    .volume(1)

export const SOI = new Material("SOI")
    .name("Artificial Soil")
    .weight(900)
    .volume(1)

export const BAC = new Material("BAC")
    .name("Helpful Bacteria")
    .weight(150)
    .volume(0.15)

export const BLE = new Material("BLE")
    .name("Desaturation Agent")
    .weight(500)
    .volume(0.5)

export const REA = new Material("REA")
    .name("Chemical Reagents")
    .weight(50)
    .volume(0.05)

export const CST = new Material("CST")
    .name("Cryogenic Stabilizer")
    .weight(1140)
    .volume(1)

export const EES = new Material("EES")
    .name("Enriched Einsteinium")
    .weight(9200)
    .volume(1)

export const ETS = new Material("ETS")
    .name("Enriched Technetium")
    .weight(4100)
    .volume(1)

export const FLX = new Material("FLX")
    .name("Flux")
    .weight(250)
    .volume(0.1)

export const IND = new Material("IND")
    .name("Indigo Colorant")
    .weight(210)
    .volume(0.2)

export const LCR = new Material("LCR")
    .name("Liquid Crystals")
    .weight(150)
    .volume(0.1)

export const NR = new Material("NR")
    .name("Nano-Enhanced Resin")
    .weight(50)
    .volume(0.05)

export const OLF = new Material("OLF")
    .name("Olfactory Substances")
    .weight(10)
    .volume(0.001)

export const DDT = new Material("DDT")
    .name("DDT Plant Agent")
    .weight(100)
    .volume(0.1)

export const PFE = new Material("PFE")
    .name("Premium Fertilizer")
    .weight(900)
    .volume(1)

export const JUI = new Material("JUI")
    .name("Sedative Substance")
    .weight(1200)
    .volume(1)

export const NAB = new Material("NAB")
    .name("Sodium Borohydride")
    .weight(100)
    .volume(0.05)

export const TLC = new Material("TLC")
    .name("TCL Acid")
    .weight(90)
    .volume(0.1)

export const THF = new Material("THF")
    .name ("ThermoFluid")
    .weight(600)
    .volume(0.35)

// --------------------- Construction Materials ----------------------
export const INS = new Material("INS")
    .name("InsuFoam")
    .weight(60)
    .volume(0.1)

export const MCG = new Material("MCG")
    .name("Mineral Construction Granulate")
    .weight(240)
    .volume(0.1)

export const SEA = new Material("SEA")
    .name("Poly-Sulfite Sealant")
    .weight(150)
    .volume(0.07)

export const EPO = new Material("EPO")
    .name("Epoxy Resin")
    .weight(40)
    .volume(0.02)

export const MTC = new Material("MTC")
    .name("MegaTube Coating")
    .weight(32)
    .volume(0.01)

export const NCS = new Material("NCS")
    .name("Nano-Carbon Sheeting")
    .weight(28)
    .volume(0.01)

export const NFI = new Material("NFI")
    .name("Nano Fiber")
    .weight(32)
    .volume(0.01)

export const NG = new Material("NG")
    .name("Nano-Coated Glass")
    .weight(22)
    .volume(0.01)

export const RG = new Material("RG")
    .name("Reinforced Glass")
    .weight(32)
    .volume(0.01)

export const GL = new Material("GL")
    .name("Glass")
    .weight(16)
    .volume(0.01)

// -------------------- Construction Parts ------------------------
export const AEF = new Material("AEF")
    .name("Aerostat Foundation")
    .weight(2000)
    .volume(5)

export const AIR = new Material("AIR")
    .name("Air Scrubber")
    .weight(1700)
    .volume(3)

export const MGC = new Material("MGC")
    .name("Magnetic Ground Cover")
    .weight(600)
    .volume(0.9)

export const TSH = new Material("TSH")
    .name("Thermal Shielding")
    .weight(2400)
    .volume(1.5)

export const TRU = new Material("TRU")
    .name("Truss")
    .weight(100)
    .volume(1.5)

export const MHL = new Material("MHL")
    .name("Metal-Halide Lighting System")
    .weight(100)
    .volume(0.05)

export const DEC = new Material("DEC")
    .name("Decorative Elements")
    .weight(500)
    .volume(2)

export const FLO = new Material("FLO")
    .name("Floating Tank")
    .weight(1000)
    .volume(2)

export const FC = new Material("FC")
    .name("Flow Control Device")
    .weight(500)
    .volume(0.25)

export const FLP = new Material("FLP")
    .name("Fluid Piping")
    .weight(300)
    .volume(2)

export const GC = new Material("GC")
    .name("Cylindrical Gas Container")
    .weight(50)
    .volume(0.1)

export const GV = new Material("GV")
    .name("Gas Vent")
    .weight(250)
    .volume(0.15)

export const LIT = new Material("LIT")
    .name("Neon Lighting System")
    .weight(1000)
    .volume(2)

export const PSH = new Material("PSH")
    .name("Pressure Shielding")
    .weight(4200)
    .volume(0.8)

export const RSH = new Material("RSH")
    .name("Radiation Shielding")
    .weight(37000)
    .volume(0.8)

export const TCS = new Material("TCS")
    .name("Stabilized Technetium")
    .weight(3400)
    .volume(1.2)

// ------------------- Construction Prefabs --------------------
export const BSE = new Material("BSE")
    .name("Basic Structural Elements")
    .weight(300)
    .volume(0.5)

export const BBH = new Material("BBH")
    .name("Basic Bulkhead")
    .weight(500)
    .volume(0.8)

export const BDE = new Material("BDE")
    .name("Basic Deck Elements")
    .weight(100)
    .volume(1.5)

export const BTA = new Material("BTA")
    .name("Basic Transparent Aperture")
    .weight(300)
    .volume(0.4)

export const LSE = new Material("LSE")
    .name("Lightweight Structural Elements")
    .weight(300)
    .volume(1.2)

export const LDE = new Material("LDE")
    .name("Lightweight Deck Elements")
    .weight(100)
    .volume(1.2)

export const LTA = new Material("LTA")
    .name("Lightweight Transparent Aperture")
    .weight(300)
    .volume(0.5)

export const LBH = new Material("LBH")
.name("Lightweight Bulkhead")
.weight(200)
.volume(0.6)

export const ABH = new Material("ABH")
    .name("Advanced Bulkhead")
    .weight(600)
    .volume(0.9)

export const ADE = new Material("ADE")
    .name("Advanced Deck Elements")
    .weight(400)
    .volume(1.5)


export const ASE = new Material("ASE")
    .name("Advanced Structural Elements")
    .weight(500)
    .volume(0.6)

export const ATA = new Material("ATA")
    .name("Advanced Transparent Aperture")
    .weight(300)
    .volume(0.4)

export const HSE = new Material("HSE")
    .name("Hardened Structural Elements")
    .weight(3100)
    .volume(0.7)

export const RBH = new Material("RBH")
    .name("Reinforced Bulkhead")
    .weight(2400)
    .volume(0.9)

export const RDE = new Material("RDE")
    .name("Reinforced Deck Elements")
    .weight(1400)
    .volume(1.5)

export const RSE = new Material("RSE")
    .name("Reinforced Structural Elements")
    .weight(1900)
    .volume(0.7)

export const RTA = new Material("RTA")
    .name("Reinforced Transparent Aperture")
    .weight(1500)
    .volume(0.5)
// ------------------- Alloys --------------------
export const FAL = new Material("FAL")
    .name("Ferrominium")
    .weight(3220)
    .volume(1)

export const AST = new Material("AST")
    .name("Alpha-Stabilized Titanium")
    .weight(4980)
    .volume(1)

export const BOS = new Material("BOS")
    .name("Borosilicate")
    .weight(1500)
    .volume(1)

export const BRO = new Material("BRO")
    .name("Borosilicate")
    .weight(8730)
    .volume(1)

export const RGO = new Material("RGO")
    .name("Red Gold")
    .weight(19320)
    .volume(1)

export const BGO = new Material("BGO")
    .name("Blue Gold")
    .weight(19320)
    .volume(1)

export const FET = new Material("FET")
    .name("Ferro-Titanium")
    .weight(6850)
    .volume(1)

export const WAL = new Material("WAL")
    .name("Alpha-Stabilized Tungsten")
    .weight(6250)
    .volume(1)

// ------------------- Consumables (basic) --------------------

export const DW = new Material("DW")
    .name("Drinking Water")
    .weight(100)
    .volume(0.1)

export const HSS = new Material("HSS")
    .name("Smart Space Suit")
    .weight(50)
    .volume(0.05)

export const FIM = new Material("FIM")
    .name("Flavoured Insta-Meal")
    .weight(550)
    .volume(0.5)

export const PDA = new Material("PDA")
    .name("Personal Data Assistant")
    .weight(2)
    .volume(0.002)

export const OVE = new Material("OVE")
    .name("Basic Overalls")
    .weight(20)
    .volume(0.025)

export const RAT = new Material("RAT")
    .name("Basic Rations")
    .weight(210)
    .volume(0.1)

export const LC = new Material("LC")
    .name("AI-Assisted Lab Coat")
    .weight(50)
    .volume(0.05)

export const MEA = new Material("MEA")
    .name("Quality Meat Meal")
    .weight(600)
    .volume(0.5)

export const WS = new Material("WS")
    .name("Scientific Work Station")
    .weight(50)
    .volume(0.5)

export const EXO = new Material("EXO")
    .name("Exoskeleton Work Suit")
    .weight(100)
    .volume(0.05)

export const PT = new Material("PT")
    .name("Power Tools")
    .weight(250)
    .volume(0.2)

export const HMS = new Material("HMS")
    .name("HazMat Work Suit")
    .weight(50)
    .volume(0.05)

export const MED = new Material("MED")
    .name("Basic Medical Kit")
    .weight(300)
    .volume(0.1)

export const SCN = new Material("SCN")
    .name("Multi-Purpose Scanner")
    .weight(1)
    .volume(0.0001)

// ------------------- Fuels --------------------

export const FF = new Material("FF")
    .name("FTL Fuel")
    .weight(50)
    .volume(0.01)