class EmptyWindow extends HTMLElement {
    constructor() {
        super();
    }

    #render() {
        
    }

    connectedCallback() {
        this.#render()
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
        this.#render();
    }
}