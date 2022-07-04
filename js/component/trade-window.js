class TradeWindow extends HTMLElement {
    ticker;
    type;

    static get observedAttributes() {return ['ticker', "type"]; }

    constructor() {
        super();
    }

    #render() {
        if (!this.ticker) {
            console.warn("Ticker can't be empty")
            return
        }

        if (!this.type) {
            console.warn("Type can't be empty")
            return;
        }

        const ticker = this.ticker;
        const type = this.type;
        this.classList.add("block")

        import("../material.js")
            .then(material => {
                this.innerHTML = "";

                /** @type Material*/
                const target = material[ticker];
                this.innerHTML += `<header>${type}<span>${ticker}</span></header>`;
                const $data = document.createElement("div");
                $data.classList.add("data");
                this.append($data);

                const $material = document.createElement("div");
                $material.classList.add("row");
                $material.classList.add("dark-blue");
                $material.innerHTML = `<label class="light-blue label">Material</label><div class="blue" data-type="info">${target._name}</div>`;
                $data.append($material);

                const askPrice = 0;
                const bidPrice = 0;
                const $exchange = document.createElement("div");
                $exchange.classList.add("row")
                $exchange.classList.add("dark-blue");
                let $label = document.createElement("label")
                $label.classList.add("light-blue");
                $label.classList.add("label");
                $label.innerText = "Ask/Bid Price";
                $exchange.append($label);
                $exchange.innerHTML += `<div class="blue" data-type="cx-price"><span>${askPrice}</span><button onclick="setPrice(${askPrice}, '${ticker}')">set</button>/<span>${bidPrice}</span><button onclick="setPrice(${bidPrice}, '${ticker}')">set</button></div>`;
                $data.append($exchange);

                const $quantity = document.createElement("div");
                $quantity.classList.add("row");
                $quantity.classList.add("dark-yellow");
                $quantity.innerHTML = `<label class="light-yellow bold label">Quantity</label>
                    <div class="dark-yellow">
                        <input class="bl-right" data-type="amount" type="number" min="0" value="0" onkeyup="calc()"
                               onchange="calc()">
                    </div>`;
                $data.append($quantity);

                const $price = document.createElement("div");
                $price.classList.add("row");
                $price.classList.add("dark-yellow");
                $price.innerHTML = `<label class="light-yellow bold label">Price</label>
                    <div class="dark-yellow">
                        <input class="bl-right" data-type="price" type="number" min="0" value="0" step="0.01" onkeyup="calc()"
                               onchange="calc()">
                    </div>`;
                $data.append($price);

                const $volume = document.createElement("div")
                $volume.classList.add("row");
                $volume.classList.add("dark-blue");
                $volume.innerHTML = `<label class="light-blue label">Volume</label><div class="blue" data-type="volume">--</div>`;
                $data.append($volume);
            })
    }

    connectedCallback() {
        this.#render()
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
        this.#render();
    }
}

customElements.define("trade-window", TradeWindow);