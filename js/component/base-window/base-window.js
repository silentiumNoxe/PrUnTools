import BaseService from "../../service/base.js";
import PlanetService from "../../service/planet.js";
import * as Planet from "../../planet.js";

const template = `
    <header>
        <article>UV-796b [Proxion]</article>
        <div data-type="control">
<!--                        <button data-action="remove">X</button>-->
        </div>
    </header>
    <div data-list="planet">
        <h2>Planet</h2>
    </div>
    <div data-list="cogc">
        <h2>CoGC</h2>
    </div>
    <div data-list="workers">
        <h2>Workers</h2>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Satisfaction</th>
                    <th>In Work</th>
                    <th>Capacity</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
    <div data-list="fees">
        <h2>Fees</h2>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>PIO</th>
                    <th>SET</th>
                    <th>TEC</th>
                    <th>ENG</th>
                    <th>SCI</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
`;

export default class BaseWindow extends HTMLElement {
    #planet;

    static get observedAttributes() {
        return ["planet"]
    }

    constructor() {
        super();
    }

    #render() {
        if (this.#planet == null) {
            console.warn("planet undefined; skip render");
            return;
        }

        this.#clear();

        const $template = document.createElement("template");
        $template.innerHTML = template;

        this.append(document.importNode($template.content, true));

        this.#renderHeader();
        this.#renderPlanet();
        this.#renderCOGC();
        this.#renderWorkers();
        this.#renderFee();
    }

    #clear() {
        this.innerHTML = "";
    }

    #renderHeader() {
        const planetService = PlanetService.instance;
        const planet = planetService.getData(this.#planet)
            .orElseThrow(() => new Error(`Planet not found - ${this.#planet}`));

        this.querySelector("header > article").textContent = planet.address + (planet.name ? ` [${planet.name}]` : "");
    }

    #renderPlanet() {
        const $planetData = this.querySelector("[data-list='planet']");
        const planetService = PlanetService.instance;
        const planet = planetService.getData(this.#planet)
            .orElseThrow(() => new Error(`Planet not found - ${this.#planet}`));

        $planetData.append(kv("Fertility", planet.getFertility().toFixed(3)));

        for (const res of planet.getResources()) {
            const extraction = Planet.extractionOne(planet, res.material)
                .orElseThrow(() => new Error("Undefined resources"));
            $planetData.append(kv(res.material.ticker, `${extraction.amount} / ${extraction.time.toString()}`));
        }
    }

    #renderCOGC() {
        const $cogc = this.querySelector("[data-list='cogc']");
        const planetService = PlanetService.instance;
        const program = planetService.getCOGC(this.#planet)
            .orElseThrow(() => new Error(`Planet not found - ${this.#planet}`));

        $cogc.append(kv(program.category, program.value*100+"%"));
    }

    #renderWorkers() {
        const $workerData = this.querySelector("[data-list='workers'] tbody");
        const baseService = BaseService.instance;
        const workers = baseService.getWorkers(this.#planet)
            .orElseThrow(() => new Error(`Base not found - ${this.#planet}`));
        for (const group of Object.keys(workers)) {
            const $tr = document.createElement("tr");
            const $name = document.createElement("td");
            $name.innerText = group;
            $tr.append($name);
            for (const worker of Object.keys(workers[group])) {
                const $td = document.createElement("td");
                $td.innerText = workers[group][worker];
                $tr.append($td);
            }
            $workerData.append($tr);
        }
    }

    #renderFee() {
        const $feeData = this.querySelector("[data-list='fees'] tbody");
        const planetService = PlanetService.instance;
        const fee = planetService.getFee(this.#planet)
            .orElseThrow(() => `Planet fee not found - ${this.#planet}`);
        for (const group of Object.keys(fee)) {
            const $tr = document.createElement("tr");
            const $name = document.createElement("td");
            $name.innerText = group;
            $tr.append($name);
            for (const worker of Object.keys(fee[group])) {
                const $td = document.createElement("td");
                $td.innerText = fee[group][worker];
                $tr.append($td);
            }
            $feeData.append($tr);
        }
    }

    connectedCallback() {
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "planet") {
            this.#planet = newValue;
        }
        this.#render();
    }
}

const kv = function (key, value) {
    const $kv = document.createElement("div");
    $kv.classList.add("kv")

    const $key = document.createElement("article")
    $key.innerText = key;
    const $value = document.createElement("article")
    $value.innerHTML = `<span>${value}</span>`;

    $kv.append($key);
    $kv.append($value);
    return $kv;
}

if (!customElements.get("base-window")) {
    customElements.define("base-window", BaseWindow);
}