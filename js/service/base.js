import Optional from "../util/optional.js";

export default class BaseService {
    static instance = new BaseService();

    constructor() {
    }

    /** @return Optional<Object>*/
    getWorkers(planet) {
        const data = {
            PIO: {
               satisfaction: 0.867,
               amount: 420,
               capacity: 500
            },
            SET: {
                satisfaction: 0.794,
                amount: 60,
                capacity: 100
            },
            TEC: {
                satisfaction: 0,
                amount: 0,
                capacity: 0
            },
            ENG: {
                satisfaction: 0,
                amount: 0,
                capacity: 0
            },
            SCI: {
                satisfaction: 0,
                amount: 0,
                capacity: 0
            }
        }

        return Optional.of(data);
    }
}