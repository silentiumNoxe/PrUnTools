import {Production, Worker} from "./constants.js";

export default class Planet {
    static TYPE = {
        ROCKY: "rocky",
        GASEOUSE: "gaseouse",
        /** @return TYPE*/
        valueOf(val) {
            for (const x of Object.keys(this)) {
                if (this[x] === val) {
                    return this[x];
                }
            }

            throw "Unknown planet type - "+val;
        }
    }

    id;
    name;
    /** @type TYPE*/
    _type;
    _atmosphere;
    _gravity;
    _temperature;
    _fertility;
    _fee = {};
    _resources = {};

    constructor(id) {
        this.id = id;

        const workerFee = {};
        workerFee[Worker.PIO] = 0;
        workerFee[Worker.SET] = 0;
        workerFee[Worker.TEC] = 0;
        workerFee[Worker.ENG] = 0;
        workerFee[Worker.SCI] = 0;

        this._fee[Production.Manufacturing] = {...workerFee};
        this._fee[Production.Chemistry] = {...workerFee};
        this._fee[Production.Metallurgy] = {...workerFee};
        this._fee[Production.Construction] = {...workerFee};
        this._fee[Production.FuelRefining] = {...workerFee};
        this._fee[Production.Agriculture] = {...workerFee};
        this._fee[Production.FoodIndustries] = {...workerFee};
        this._fee[Production.Electronics] = {...workerFee};
        this._fee[Production.ResourceExtraction] = {...workerFee};
    }

    get type() {
        return this._type;
    }

    get atmosphere() {
        return this._atmosphere;
    }

    get gravity() {
        return this._gravity;
    }

    get temperature() {
        return this._temperature;
    }

    get fertility() {
        return this._fertility;
    }

    getFee(production=null, worker=null) {
        if (!production) {
            if (!worker) {
                return this._fee[production][worker];
            }

            return this._fee[production];
        }

        return this._fee;
    }
}