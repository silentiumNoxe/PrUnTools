export default class AppWindow extends HTMLElement {

    #command;
    #args;

    #header;

    static get observedAttributes() {return ["command"]; }

    constructor() {
        super();
    }

    #render() {
        this.clear();

        this.classList.add("block");
        this.#renderHeader();
    }

    #renderHeader() {
        const $header = document.createElement("header");
        $header.innerHTML = this.#header;
        this.append($header);
    }

    clear() {
        this.innerHTML = "";
    }

    set header(val) {
        this.#header = val;
    }

    connectedCallback() {
        this.#render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "command") {
            this.#parseCommand(newValue);
        } else {
            this[name] = newValue;
        }

        this.#render();
    }

    #parseCommand(value) {
        const runes = value.toUpperCase().split(" ");
        this.#command = runes[0];
        this.#args = runes[1];
    }
}

if (!customElements.get("app-window")) {
    customElements.define("app-window", AppWindow);
}

