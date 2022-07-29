import BaseService from "../../service/base.js";
import PlanetService from "../../service/planet.js";
import * as Planet from "../../planet.js";
import {Production} from "../../constants.js";

const template = `
    <header>
        <article>UV-796b [Proxion]</article>
        <div data-type="control">
<!--                        <button data-action="remove">X</button>-->
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
        const planetService = PlanetService.instance;

        const planet = planetService.getData(this.#planet)
            .orElseThrow(() => new Error(`Planet not found - ${this.#planet}`));

        const $baseWindow = find(this.#planet);

        const $title = this.querySelector("header > article");
        $title.textContent = planet.address + (planet.name ? ` [${planet.name}]` : "");
        if (this.#edit) {
            $title.textContent += " (edit)";
        }

        const $editButton = $baseWindow.querySelector(`header [data-action='edit']`);
        $editButton.addEventListener("click", () => {
            $baseWindow.setAttribute("edit", "");
        });

        const $cancelButton = $baseWindow.querySelector(`header [data-action='cancel']`);
        $cancelButton.addEventListener("click", () => {
            $baseWindow.removeAttribute("edit");
        })

        if (this.#edit) {
            $editButton.innerHTML = "&#10003;";
            find(this.#planet).querySelector(`header [data-action='cancel']`).hidden = false;
        } else {
            $editButton.innerHTML = "&#9881;";
            find(this.#planet).querySelector(`header [data-action='cancel']`).hidden = true;
        }
    }

    #renderPlanet() {
        const planetService = PlanetService.instance;

        const planet = planetService.getData(this.#planet)
            .orElseThrow(() => new Error(`Planet not found - ${this.#planet}`));

        const $planetData = this.querySelector("[data-list='planet']");

        /** @this BaseWindow*/
        function renderDefault() {
            $planetData.append(kv("Fertility", Math.round(planet.getFertility()*100)+100+"%"));

            for (const res of planet.getResources()) {
                const extraction = Planet.extractionOne(planet, res.material)
                    .orElseThrow(() => new Error("Undefined resources"));
                $planetData.append(kv(res.material.ticker, `${extraction.amount} / ${extraction.time.toString()}`));
            }
        }

        /** @this BaseWindow*/
        function renderEdit() {
            $planetData.append(kv(
                "Fertility",
                `<input name="fertility" value="${planet.getRawFertility()}">`,
                true
            ));
            for (const res of planet.getResources()) {
                $planetData.append(kv(
                    res.material.ticker,
                    `<input name="${planet.address}.${res.material.ticker}" value="${res.concentration}">`,
                    true
                ))
            }
        }

        if (this.#edit) {
            renderEdit();
        } else {
            renderDefault();
        }
    }

    #renderCOGC() {
        const planetService = PlanetService.instance;

        const $cogc = this.querySelector("[data-list='cogc']");

        if (this.#edit) {
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
        } else {
            const program = planetService.getCOGC(this.#planet)
                .orElseThrow(() => new Error(`Planet not found - ${this.#planet}`));

            $cogc.append(kv("Program", program));
        }
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

const find = function (planet) {
    return document.querySelector(`base-window[planet="${planet}"]`);
}

if (!customElements.get("base-window")) {
    customElements.define("base-window", BaseWindow);
}