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
}

// ----------------------Agricultural Products------------------------

export const FOD = new Material("FOD")
    .name("All-Purpose Fodder")
    .weight(1200)

export const HOP = new Material("HOP")
    .name("Flowery Hops")
    .weight(350)

export const CAF = new Material("CAF")
    .name("Caffeinated Beans")
    .weight(860)

export const GRN = new Material("GRN")
    .name("High-Carb Grains")
    .weight(900)

export const MAI = new Material("MAI")
    .name("High-Carb Maize")
    .weight(1300)

export const RCO = new Material("RCO")
    .name("Raw Cotton Fiber")
    .weight(950)

export const NUT = new Material("NUT")
    .name("Triglyceride Nuts")
    .weight(900)

export const BEA = new Material("BEA")
    .name("Protein-Rich Beans")
    .weight(800)

export const VEG = new Material("VEG")
    .name("Triglyceride Fruits")
    .weight(1100)

// -----------------------Chemicals--------------------------------
export const NS = new Material("NS")
    .name("Nutrient Solution")
    .weight(600)
    .volume(0.5)

export const BL = new Material("BL")
    .name("Breathable Liquid")
    .weight(1120)
    .volume(1)

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

// -------------------- Construction Parts ------------------------
export const AEF = new Material("AEF")
    .name("Aerostat Foundation")
    .weight(2000)
    .volume(5)

export const MGC = new Material("MGC")
    .name("Magnetic Ground Cover")
    .weight(600)
    .volume(0.9)

export const HSE = new Material("HSE")
    .name("Hardened Structural Elements")
    .weight(3100)
    .volume(0.7)

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