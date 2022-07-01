const version = 1;
const dbName = "app";

function open() {
    let openRequest = indexedDB.open(dbName, version);
    openRequest.addEventListener("error", console.error);
    openRequest.addEventListener("upgradeneeded", (event) => {
        const db = event.target.result;
        const store = db.createObjectStore("factories", {keyPath: "planet"});
        store.createIndex("name_idx", "name", {unique: true});
    });
    return openRequest;
}

function putBase(data) {
    const {
        name
    } = data;
}