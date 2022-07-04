export const Production = {
    Agriculture: "Agriculture",
    Chemistry: "Chemistry",
    Construction: "Construction",
    Electronics: "Electronics",
    FoodIndustries: "FoodIndustries",
    FuelRefining: "FuelRefining",
    Manufacturing: "Manufacturing",
    Metallurgy: "Metallurgy",
    ResourceExtraction: "ResourceExtraction"
}

export const ProductionStyle = {
    Agriculture: {
        background: "linear-gradient(135deg, rgb(92, 18, 18), rgb(117, 43, 43))",
        color: "rgb(219, 145, 145)"
    },
    FuelRefining: {
        background: "linear-gradient(135deg, rgb(30, 123, 30), rgb(55, 148, 55))",
        color: "rgb(157, 250, 157)"
    }
}

export const Worker = {
    PIO: "Pioneers",
    SET: "Settlers",
    TEC: "Technicians",
    ENG: "Engineers",
    SCI: "Scientists"
}

export const Currency = {
    CIS: "CIS",
    AIC: "AIC",
    ECD: "ECD",
    ICA: "ICA",
    NCC: "NCC"
}

export const Exchange = {
    AI1: {
        name: "Antares Station Commodity Exchange",
        operator: "Antares Initiative",
        location: "Antares Station (Antares I)",
        currency: Currency.AIC
    },
    CI2: {
        name: "Arclight Commodity Exchange",
        operator: "Castillo-Ito Mercantile",
        location: "Arclight Station (Arclight)",
        currency: Currency.CIS
    },
    CI1: {
        name: "Benten Station Commodity Exchange",
        operator: "Castillo-Ito Mercantile",
        location: "Benten Station (Benten)",
        currency: Currency.CIS
    },
    IC1: {
        name: "Hortus Station Commodity Exchange",
        operator: "Insitor Cooperative",
        locale: "Hortus Station (Hortus)",
        currency: Currency.ICA
    },
    NC2: {
        name: "Hubur Commodity Exchange",
        operator: "NEO Charter Exploration",
        locale: "Hubur Station (Hubur)",
        currency: Currency.NCC
    },
    NC1: {
        name: "Moria Station Commodity Exchange",
        operator: "NEO Charter Exploration",
        locale: "Moria Station (Moria)",
        currency: Currency.NCC
    }
}