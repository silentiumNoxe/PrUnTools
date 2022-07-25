import * as Material from "../../material.js";
import Optional from "../../util/optional.js";

const template = `
<div class="content">
    <header>
        <div data-type="title">
            <section data-type="title"></section>
            <section data-type="command"></section>
        </div>
        <div class="flex flex-row" style="margin-left: auto">
            <div class="flex flex-row" data-list="window-control">
                <button data-type="window-setting" data-action="v-split">-</button>
                <button data-type="window-setting" data-action="h-split">|</button>
                <button data-type="window-setting" data-action="close">x</button>
                <button data-type="window-setting" data-action="reset">:</button>
            </div>
            <button class="gear" data-type="window-setting" disabled>&#9881</button>
        </div>
    </header>
</div>
`;

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

        const material = Material.find(this.ticker.orElseThrow(() => new Error("Ticker cannot be empty")))
            .orElseThrow(() => new Error(`Undefined material: ${this.#ticker}`));

        const $template = document.createElement("template");
        $template.innerHTML = template;

        this.append(document.importNode($template.content, true));

        this.querySelector(`header section[data-type="title"]`).innerText = material._name;

        const $controlList = this.querySelector("header [data-list='window-control']");

        this.querySelector("header [data-type='window-setting'].gear")
            .addEventListener("mouseover", () => {
                let a = $controlList.classList.contains("hidden");
                console.log("show control list", a);
            });

        $controlList.addEventListener("mouseover", () => {
            this.querySelector("header .gear[data-type='window-setting']").hide();
            console.log("mouseover")
        });
        $controlList.addEventListener("mouseout", () => {
            this.querySelector("header .gear[data-type='window-setting']").show();
            $controlList.hide();
            console.log("mouseout")
        });
    }

    clear() {
        this.innerHTML = "";
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