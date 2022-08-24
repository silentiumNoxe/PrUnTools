import * as Planet from "../planet.js";
import Optional from "../util/optional.js";
import {Production} from "../constants.js";
import localforage from "./db.js";
import {PlanetResource} from "../planet.js";
import PlanetFee from "../model/planet_fee.js";

export default class PlanetService {
    static instance = new PlanetService();

    constructor() {

    }

    /** @return Promise<Optional<Planet>> */
    getData(id) {
        const db = localforage.createInstance({
            driver: localforage.INDEXEDDB,
            name: "app",
            storeName: "planet",
            version: 1.0
        });

        return new Promise((resolve, reject) => {
            db.getItem(id)
                .then(value => {
                    if (value == null) {
                        resolve(Optional.ofNullable(Planet[id]))
                        return;
                    }

                    const planet = new Planet.default(value.address, value.name)
                        .type(value.type)
                        .cogc(value.cogc)
                        .fertility(value.fertility)
                        .gravity(value.gravity)
                        .temperature(value.temperature)
                        .pressure(value.pressure);

                    resolve(Optional.of(planet));
                }).catch(reject);
        });
    }

    /** @return Promise<Array<PlanetResource>>*/
    getResources(id) {
        const db = localforage.createInstance({
            driver: localforage.INDEXEDDB,
            name: "app",
            storeName: "planet-resource",
            version: 1.0
        });

        return new Promise((resolve, reject) => {
            db.getItem(id)
                .then(values => {
                    if (values == null || values.length === 0) {
                        resolve(Optional.ofNullable(Planet[id]).map(x => x.getResources()).orElse([]));
                        return;
                    }

                    const list = [];
                    for (const res of values) {
                        list.push(new PlanetResource(res.material, res.concentration, res.type));
                    }
                    resolve(list);
                }).catch(reject);
        });
    }

    /** @return Promise<Array<PlanetFee>>*/
    getFee(id) {
        const db = localforage.createInstance({
            driver: localforage.INDEXEDDB,
            name: "app",
            storeName: "planet-fee",
            version: 1.0
        });

        return new Promise((resolve, reject) => {
            db.getItem(id)
                .then(values => {
                    if (values == null) {
                        resolve([]);
                    }

                    const list = [];
                    for (const data of values) {
                        list.push(new PlanetFee(data.type, data.values));
                    }

                    resolve(list);
                }).catch(reject);
        });

        // const data = {
        //     Agriculture: {
        //         PIO: 20,
        //         SET: 25,
        //         TEC: 30,
        //         ENG: 35,
        //         SCI: 40
        //     },
        //     Chemistry: {
        //         PIO: 10,
        //         SET: 15,
        //         TEC: 15,
        //         ENG: 20,
        //         SCI: 40
        //     },
        //     Construction: {
        //         PIO: 10,
        //         SET: 15,
        //         TEC: 15,
        //         ENG: 20,
        //         SCI: 40
        //     },
        //     Electronics: {
        //         PIO: 10,
        //         SET: 15,
        //         TEC: 50,
        //         ENG: 50,
        //         SCI: 50
        //     },
        //     "Food Industries": {
        //         PIO: 10,
        //         SET: 10,
        //         TEC: 10,
        //         ENG: 20,
        //         SCI: 40
        //     },
        //     "Fuel Refining": {
        //         PIO: 10,
        //         SET: 10,
        //         TEC: 15,
        //         ENG: 20,
        //         SCI: 40
        //     },
        //     Manufacturing: {
        //         PIO: 10,
        //         SET: 15,
        //         TEC: 15,
        //         ENG: 20,
        //         SCI: 40
        //     },
        //     "Resource Extraction": {
        //         PIO: 10,
        //         SET: 10,
        //         TEC: 10,
        //         ENG: 20,
        //         SCI: 40
        //     }
        // }
    }
}