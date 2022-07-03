export class PlanetDAO {
    #dbName = "app"
    #version = 1

    #objectStores = [
        {
            name: "planet",
            options: {keyPath: "id"},
            indexes: [
                {
                    name: "name_idx",
                    column: "name",
                    options: {unique: true}
                }
            ]
        },
        {
            name: "planet-fee",
            options: {keyPath: "id"},
            indexes: []
        },
        {
            name: "planet-resource",
            options: {keyPath: "id"},
            indexes: []
        }
    ];

    constructor() {
        let conn = indexedDB.open(this.#dbName, this.#version)
        conn.addEventListener("error", console.error)
        conn.addEventListener("upgradeneeded", event => {
            const db = event.target.result;

            for (const store of this.#objectStores) {
                const oStore = db.createObjectStore(store.name, store.options);
                for (const index of store.indexes) {
                    oStore.createIndex(index.name, index.column, index.options);
                }
            }
        });
    }

    findById(id, consumer) {
        let conn = indexedDB.open(this.#dbName, this.#version)
        conn.addEventListener("error", console.error)
        conn.addEventListener("success", event => {
            const db = event.target.result;
            const req = db.transaction("planet").objectStore("planet").get(id);
            req.addEventListener("error", event => {
                consumer({
                    error: true,
                    errorReason: event
                })
            })
            req.addEventListener("success", event => {
                consumer({
                    error: false,
                    dataType: "commons",
                    data: event.target.result
                });

                this.findFeeById(id, consumer);
                this.findResourcesById(id, consumer);
            })
        })
    }

    findFeeById(id, consumer) {
        let conn = indexedDB.open(this.#dbName, this.#version)
        conn.addEventListener("error", console.error)
        conn.addEventListener("success", event => {
            const db = event.target.result;
            const req = db.transaction("planet-fee").objectStore("planet-fee").get(id);
            req.addEventListener("error", event => {
                consumer({
                    error: true,
                    errorReason: event
                })
            })
            req.addEventListener("success", event => {
                consumer({
                    error: false,
                    dataType: "fee",
                    data: event.target.result
                });
            })
        })
    }

    findResourcesById(id, consumer) {
        let conn = indexedDB.open(this.#dbName, this.#version)
        conn.addEventListener("error", console.error)
        conn.addEventListener("success", event => {
            const db = event.target.result;
            const req = db.transaction("planet-resource").objectStore("planet-resource").get(id);
            req.addEventListener("error", event => {
                consumer({
                    error: true,
                    errorReason: event
                })
            })
            req.addEventListener("success", event => {
                consumer({
                    error: false,
                    dataType: "resources",
                    data: event.target.result
                });
            })
        })
    }

    /** @param planet {Planet}*/
    save(planet) {
        let conn = indexedDB.open(this.#dbName, this.#version)
        conn.addEventListener("error", console.error)
        conn.addEventListener("success", event => {
            const db = event.target.result;
            const req = db.transaction("planet", "readwrite").objectStore("planet").add({
                id: planet.id,
                name: planet.name,
                type: planet._type,
                atmosphere: planet._atmosphere,
                gravity: planet._gravity,
                temperature: planet._temperature,
                fertility: planet._fertility
            });
            req.addEventListener("error", console.error)
        })
    }
}