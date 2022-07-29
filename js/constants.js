export const Production = {
    Agriculture: "Agriculture",
    Chemistry: "Chemistry",
    Construction: "Construction",
    Electronics: "Electronics",
    FoodIndustries: "Food Industries",
    FuelRefining: "Fuel Refining",
    Manufacturing: "Manufacturing",
    Metallurgy: "Metallurgy",
    ResourceExtraction: "Resource Extraction"
}

export const Worker = {
    PIO: "Pioneers",
    SET: "Settlers",
    TEC: "Technicians",
    ENG: "Engineers",
    SCI: "Scientists"
}

export const pioEfficient = function (dw, rat, ove, pwo, cof) {
    return 0.02 * (1+(dw*10/3)) * (1+(rat*4)) * (1+(ove*5/6)) * (1+(pwo*1/11)) * (1+(cof*2/13));
}

export const setlEfficient = function (dw, rat, exo, pt, rep, kom) {
    return 0.01 * (1+(dw*10/3)) * (1+(rat*4)) * (1+(exo)) * (1+(pt*5/6)) * (1+(rep*1/11)) * (1+(kom*2/13));
}

export const tecEfficient = function (dw, rat, med, hms, scn, ale, sc) {
    return 0.005 * (1+(dw*10/3)) * (1+(rat*4)) * (1+(med*5/6)) * (1+(hms)) * (1+(scn)) * (1+(ale*2/13)) * (1+(sc/11));
}

export const engEfficient = function (dw, fim, med, hss, pda, gin, vg) {
    return 0.005 * (1+(dw*10/3)) * (1+(fim*4)) * (1+(med*5/6)) * (1+hss) * (1+pda) * (1+(gin*2/13)) * (1+(vg/11));
}

export const sciEfficient = function (dw, mea, med, lc, ws, win, nst) {
    return 0.005 * (1+([dw]*10/3)) * (1+([mea]*4)) * (1+([med]*5/6)) * (1+[lc]) * (1+[ws]) * (1+([win]*2/13)) * (1+([nst]/11));
}