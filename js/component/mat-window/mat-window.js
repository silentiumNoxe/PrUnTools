import * as Material from "../../material.js";
import Optional from "../../util/optional.js";

export default class MatWindow extends HTMLElement {
    #ticker;

    static get observedAttributes() {
        return ["ticker"];
    }

    constructor() {
        super();
    }

    #render() {
        this.clear();

        if (!this.id) {
            this.id = generateId(32);
        }

        if (!this.classList.contains("window")) {
            this.classList.add("window");
        }

        const material = Material.find(this.ticker.orElseThrow(() => new Error("Ticker cannot be empty")));

        const $content = document.createElement("div");
        $content.classList.add("content");

        const $header = document.createElement("header");
        $content.append($header);
        $header.innerText = "Material: " + material.map(x => x._name)
            .orElseThrow(() => new Error(`Undefined material: ${this.#ticker}`));

        this.append($content);
    }

    clear() {
    }

    connectedCallback() {
        this.#render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
        this.#render();
    }

    disconnectedCallback() {
    }

    adoptedCallback() {
    }

    /** @return Optional<string>*/
    get ticker() {
        return Optional.ofNullable(this.#ticker).map(x => x.toUpperCase());
    }

    set ticker(val) {
        this.#ticker = val;
    }
}

if (!customElements.get("mat-window")) {
    customElements.define("mat-window", MatWindow);
}