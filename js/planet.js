export default class Planet {
    static TYPE = {
        ROCKY: "rocky",
        GASEOUSE: "gaseouse"
    }

    /** @type TYPE*/
    _type;
    _atmosphere;
    _gravity;
    _temperature;
    _fertility;

    constructor() {
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
}