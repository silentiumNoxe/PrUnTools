export default class EmptyWindow extends HTMLElement {

    static get observedAttributes() {
        return [];
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

        const $form = document.createElement("form");
        const $input = document.createElement("input");
        const $autocomplete = document.createElement("div");

        $input.dataset.window = this.id;
        $input.placeholder = "Enter content command";

        $form.append($input);
        $form.append($autocomplete);

        this.append($form);
    }

    clear() {
    }

    connectedCallback() {
        this.#render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
    }

    disconnectedCallback() {
    }

    adoptedCallback() {
    }
}

if (!customElements.get("empty-window")) {
    customElements.define("empty-window", EmptyWindow);
}