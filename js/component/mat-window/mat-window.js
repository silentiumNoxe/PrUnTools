import * as Material from "../../material.js";
import Optional from "../../util/optional.js";

const template = `
<div class="content">
    <header>
        <div data-type="title">
            <section data-type="title"></section>
            <section data-type="command"></section>
        </div>
        <div class="flex flex-row" style="margin-left: auto" data-list="window-control">
            <button class="gear" data-type="window-setting">&#9881</button>
            <div class="flex flex-row unknown">
                <button data-type="window-setting" data-action="v-split">-</button>
                <button data-type="window-setting" data-action="h-split">|</button>
                <button data-type="window-setting" data-action="close">x</button>
                <button data-type="window-setting" data-action="reset">:</button>
            </div>
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

        this.querySelector(`header section[data-type="title"]`).innerText = "Material: "+material._name;

        this.querySelector(`header [data-action="h-split"]`).addEventListener("click", () => horizontalSplit(this));
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

function horizontalSplit(window) {
    const $target = window.parentNode;
    window.style.width = "50%";
    window.style.position = "relative";
    window.style.display = "inline-block";

    const $div = document.createElement("div");
    $div.classList.add("flex");
    $div.classList.add("flex-row");
    $div.classList.add("flex-grow1");
    $div.classList.add("absolute");
    $div.append(window);

    const secondWindow = document.createElement("mat-window");
    secondWindow.setAttribute("ticker", "NUT");
    secondWindow.style.width = "50%";
    secondWindow.style.position = "relative";
    secondWindow.style.display = "inline-block";
    $div.append(secondWindow);

    $target.append($div);
}

if (!customElements.get("mat-window")) {
    customElements.define("mat-window", MatWindow);
}