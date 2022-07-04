class MaterialIcon extends HTMLElement {
    ticker

    static get observedAttributes() {return ['ticker']; }

    constructor() {
        super();
    }

    #render() {
        const targetMat = this.ticker;
        this.innerText = targetMat;

        import("../material.js")
            .then(material => {
                const target = material[targetMat]
                if (target == null) {
                    throw `Material ${targetMat} not found`;
                }
                const category = target._category;

                this.title = target._name;

                import("../constants.js")
                    .then(constants => {
                        console.debug("look for ", category, "category")
                        const style = constants.ProductionStyle[category]
                        this.style.background = style.background;
                        this.style.color = style.color;
                    })
            })
    }

    connectedCallback() {
        if (this.ticker == null) {
            console.warn("Ticker can't be empty");
            return;
        }
        this.#render()
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.debug(name, newValue);
        this[name] = newValue;
        this.#render()
    }
}

customElements.define("material-icon", MaterialIcon);