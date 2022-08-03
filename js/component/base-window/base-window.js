import BaseService from "../../service/base.js";
import PlanetService from "../../service/planet.js";
import * as Planet from "../../planet.js";
import {Production} from "../../constants.js";

const template = `
    <header>
        <article>UV-796b [Proxion]</article>
        <div data-type="control">
            <button data-action="delete" hidden>&#128465;</button>
            <button class="gear" data-action="edit">&#9881;</button>
            <button data-action="cancel" hidden>x</button>
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
    #edit = false;

    static get observedAttributes() {
        return ["planet", "edit"]
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
        const $baseWindow = this;

        function fail(err) {
            console.error("Error occurred render header;", err);
        }

        function renderEdit(planet) {
            const $title = $baseWindow.querySelector("header > article");
            $title.textContent = planet.address + (planet.name ? ` [${planet.name}]` : "") + " (edit)";

            const $editButton = $baseWindow.querySelector(`header [data-action='edit']`);
            $editButton.addEventListener("click", () => {
                $baseWindow.setAttribute("edit", "");
            });

            const $cancelButton = $baseWindow.querySelector(`header [data-action='cancel']`);
            $cancelButton.addEventListener("click", () => {
                $baseWindow.removeAttribute("edit");
            })

            const $deleteButton = $baseWindow.querySelector(`header [data-action="delete"]`);
            $deleteButton.addEventListener("click", () => {
                deleteBase($baseWindow);
            });

            $editButton.innerHTML = "&#10003;";
            $baseWindow.querySelector(`header [data-action='cancel']`).hidden = false;
            $baseWindow.querySelector(`header [data-action='delete']`).hidden = false;
        }

        function renderDefault(planet) {
            const $title = $baseWindow.querySelector("header > article");
            $title.textContent = planet.address + (planet.name ? ` [${planet.name}]` : "");

            const $editButton = $baseWindow.querySelector(`header [data-action='edit']`);
            $editButton.addEventListener("click", () => {
                $baseWindow.setAttribute("edit", "");
            });

            const $cancelButton = $baseWindow.querySelector(`header [data-action='cancel']`);
            $cancelButton.addEventListener("click", () => {
                $baseWindow.removeAttribute("edit");
            })

            const $deleteButton = $baseWindow.querySelector(`header [data-action="delete"]`);
            $deleteButton.addEventListener("click", () => {
                deleteBase($baseWindow);
            });

            $editButton.innerHTML = "&#9881;";
            $baseWindow.querySelector(`header [data-action='cancel']`).hidden = true;
            $baseWindow.querySelector(`header [data-action='delete']`).hidden = true;
        }

        const planetService = PlanetService.instance;

        planetService.getData(this.#planet)
            .then(x => x.orElseThrow(() => new Error(`Planet not found: ${this.#planet}`)))
            .then(x => this.#edit ? renderEdit(x) : renderDefault(x))
            .catch(fail);
    }

    #renderPlanet() {
        const baseWindow = this;

        function fail(err) {
            console.error("Error occurred render planet data;", err);
        }

        /** @this BaseWindow*/
        function renderDefault(planet) {
            const $planetData = baseWindow.querySelector("[data-list='planet']");

            $planetData.append(kv("Fertility", Math.round(planet.getFertility()*100)+100+"%"));

            for (const res of planet.getResources()) {
                const extraction = Planet.extractionOne(planet, res.material)
                    .orElseThrow(() => new Error("Undefined resources"));
                $planetData.append(kv(res.material.ticker, `${extraction.amount} / ${extraction.time.toString()}`));
            }
        }

        /** @this BaseWindow*/
        function renderEdit(planet) {
            const $planetData = baseWindow.querySelector("[data-list='planet']");

            $planetData.append(kv(
                "Fertility",
                `<input name="fertility" value="${planet.getRawFertility()}">`,
                true
            ));
            for (const res of planet.getResources()) {
                const $div = document.createElement("div");
                $div.classList.add("input-data");
                $div.innerHTML = `<select>
                                    <option>Atmospheric</option>
                                    <option>Liquid</option>
                                    <option>Mineral</option>
                                </select>
                                <input name="${planet.address}.${res.material.ticker}" value="${res.concentration}">`;

                $planetData.append(kv(
                    res.material.ticker,
                    $div,
                    true
                ))
            }
        }

        const planetService = PlanetService.instance;

        planetService.getData(this.#planet)
            .then(x => x.orElseThrow(() => new Error(`Planet not found: ${this.#planet}`)))
            .then(x => this.#edit ? renderEdit(x) : renderDefault(x))
            .catch(fail);
    }

    #renderCOGC() {
        const $baseWindow = this;

        function fail(err) {
            console.error("Error occurred render planet data;", err);
        }

        function renderEdit(planet) {
            const $cogc = $baseWindow.querySelector("[data-list='cogc']");

            const $select = document.createElement("select")
            for (const type of Object.values(Production)) {
                const $option = document.createElement("option");
                $option.textContent = type;
                $select.append($option);
            }

            $cogc.append(kv(
                "Program",
                $select,
                true
            ))
        }

        function renderDefault(planet) {
            const $cogc = $baseWindow.querySelector("[data-list='cogc']");

            const program = planet.getCOGC().orElse(null);
            $cogc.append(kv("Program", program));
        }

        const planetService = PlanetService.instance;

        planetService.getData(this.#planet)
            .then(x => x.orElseThrow(() => new Error(`Planet not found: ${this.#planet}`)))
            .then(x => this.#edit ? renderEdit(x) : renderDefault(x))
            .catch(fail);
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
        const $baseWindow = this;

        function fail(err) {
            console.error("Error occurred render planet data;", err);
        }

        function renderEdit(fee) {
            renderDefault()
        }

        function renderDefault(fee) {
            const $feeData = $baseWindow.querySelector("[data-list='fees'] tbody");

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

        const planetService = PlanetService.instance;

        planetService.getFee(this.#planet)
            .then(x => this.#edit ? renderEdit(x) : renderDefault(x))
            .catch(fail);
    }

    connectedCallback() {
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "planet") {
            this.#planet = newValue;
        }
        if (name === "edit") {
            this.#edit = !this.#edit;
        }
        this.#render();
    }
}

const kv = function (key, value, editMode) {
    const $kv = document.createElement("div");
    $kv.classList.add("kv")
    if (editMode) {
        $kv.classList.add("edit")
    }

    const $key = document.createElement("article")
    $key.innerText = key;
    const $value = document.createElement("article")
    if (typeof value === "object") {
        $value.append(value);
    } else if (value.startsWith("<input") || value.startsWith("<switch")) {
        $value.innerHTML = value;
    } else {
        $value.innerHTML = `<span>${value}</span>`;
    }

    $kv.append($key);
    $kv.append($value);
    return $kv;
}

function find (planet) {
    return document.querySelector(`base-window[planet="${planet}"]`);
}

/** @param $base {BaseWindow}*/
function deleteBase($base) {
    $base.remove();
}

if (!customElements.get("base-window")) {
    customElements.define("base-window", BaseWindow);
}