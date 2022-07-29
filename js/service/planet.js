import * as Planet from "../planet.js";
import Optional from "../util/optional.js";
import {Production} from "../constants.js";

export default class PlanetService {
    static instance = new PlanetService();

    constructor() {
    }

    /** @return Optional<Planet> */
    getData(id) {
        return Optional.ofNullable(Planet[id]);
    }

    /** @return Optional<Object>*/
    getCOGC(id) {
        let data;
        if (id === "UV-796b" || id === "Proxion") {
            data = {category: Production.Agriculture, value: 0.25};
        }
        if (id === "JS-952c" || id === "Gibson") {
            data = {category: Production.Construction, value: 0.25}
        }
        return Optional.ofNullable(data);
    }

    /** @return Optional<Object>*/
    getFee(planet) {
        const data = {
            Agriculture: {
                PIO: 20,
                SET: 25,
                TEC: 30,
                ENG: 35,
                SCI: 40
            },
            Chemistry: {
                PIO: 10,
                SET: 15,
                TEC: 15,
                ENG: 20,
                SCI: 40
            },
            Construction: {
                PIO: 10,
                SET: 15,
                TEC: 15,
                ENG: 20,
                SCI: 40
            },
            Electronics: {
                PIO: 10,
                SET: 15,
                TEC: 50,
                ENG: 50,
                SCI: 50
            },
            "Food Industries": {
                PIO: 10,
                SET: 10,
                TEC: 10,
                ENG: 20,
                SCI: 40
            },
            "Fuel Refining": {
                PIO: 10,
                SET: 10,
                TEC: 15,
                ENG: 20,
                SCI: 40
            },
            Manufacturing: {
                PIO: 10,
                SET: 15,
                TEC: 15,
                ENG: 20,
                SCI: 40
            },
            "Resource Extraction": {
                PIO: 10,
                SET: 10,
                TEC: 10,
                ENG: 20,
                SCI: 40
            }
        }

        return Optional.of(data);
    }
}