import * as Workforce from "../workforce.js";

export default class RecipeView {

    /** @type Recipe*/
    #recipe;

    /** @param recipe {Recipe}*/
    constructor(recipe) {
        this.#recipe = recipe;
    }

    getTime() {
        const format = localStorage.getItem("time-format") || "h";
        return this.#recipe.duration.getInFormat(format);
    }

    getTargetTicker() {
        return this.#recipe.target ? this.#recipe.target.ticker : "???";
    }

    getResultAmount() {
        return this.#recipe.getAmount();
    }

    getMaterials(withConsumable = false) {
        const materials = this.#recipe.materials;

        if (withConsumable) {
            for (const workforce of this.#recipe.targetFactory.getWorkforce()) {
                const worker = Workforce[workforce.type];
                if (worker == null) {
                    console.warn("No worker data", workforce.type);
                    continue;
                }

                for (const material of worker.getMaterials()) {
                    const type = material.material;
                    const amount = material.amount * workforce.amount;

                    const x = materials.find(x => x.type === type);
                    if (x != null) {
                        x.amount += amount;
                    } else {
                        materials.push({type, amount});
                    }
                }
            }
        }

        return materials;
    }

    getExpenses() {
        const materials = this.getMaterials(true);

        let total = 0;
        let ingredient = 0;
        let consumable = 0;

        for (const mat of materials) {
            if (!mat.type) {
                continue;
            }

            const price = JSON.parse(localStorage.getItem(`price-${mat.type.ticker}`) || "{}").ask || 0;
            total += price * mat.amount;

            mat.type.isConsumable() ? consumable += price * mat.amount : ingredient += price * mat.amount;
        }

        total += this.getFee();

        return {total, ingredient, consumable};
    }

    getCostPrice() {
        return this.getExpenses().total / this.getResultAmount();
    }

    getFee() {
        return 0;
    }

    render() {
        const $view = document.create("fieldset");
        $view.append(document.create("legend", {textContent: this.getTargetTicker()}));
        $view.classList.add("recipe");

        drawTime.call(this, $view);
        drawResultAmount.call(this, $view);
        drawFee.call(this, $view);
        drawExpenses.call(this, $view);
        drawCostPrice.call(this, $view);

        $view.append(document.create("hr"));

        drawIngredients.call(this, $view);

        $view.recipeview = this;
        return $view;
    }
}

/** @this RecipeView*/
function drawTime($view) {
    const format = localStorage.getItem("time-format") || "h";
    $view.append(drawKV(`Time (${format})`, this.getTime()));
}

/** @this RecipeView*/
function drawResultAmount($view) {
    $view.append(drawKV("Result amount", this.getResultAmount()));
}

/** @this RecipeView*/
function drawFee($view) {
    $view.append(drawKV("Fee", this.getFee().toFixed(2)));
}

/** @this RecipeView*/
function drawExpenses($view) {
    $view.append(document.create("br"));

    const expenses = this.getExpenses();
    $view.append(drawKV("Consumable", expenses.consumable.toFixed(2)));
    $view.append(drawKV("Ingredients", expenses.ingredient.toFixed(2)));
    $view.append(drawKV("Total", expenses.total.toFixed(2)));
}

/** @this RecipeView*/
function drawCostPrice($view) {
    $view.append(document.create("br"));

    $view.append(drawKV("Cost price", this.getCostPrice().toFixed(2)));
}

/** @this RecipeView*/
function drawIngredients($view) {
    const $amount = document.createElement("div");
    const $table = document.createElement("table");
    $amount.append($table);

    const $head = document.createElement("tr");
    $head.innerHTML = "<th>Ticker</th><th>Amount</th><th>Price</th><th>Sum</th>";
    $table.append($head);

    const materials = this.getMaterials(true);

    for (const mat of materials) {
        const ticker = mat.type == null ? "???" : mat.type.ticker.toUpperCase();
        const price = JSON.parse(localStorage.getItem(`price-${ticker}`) || "{}").ask || 0;

        const $row = document.createElement("tr");
        $row.innerHTML = `<td>${ticker}</td><td>${mat.amount.toFixed(2)}</td><td>${price}</td><td>${(mat.amount * price).toFixed(2)}</td>`;
        $table.append($row);
    }

    $view.append($amount);
}

/** @return HTMLElement*/
function drawKV(key, value) {
    const $div = document.createElement("div");
    $div.classList.add("kv");

    const $key = document.createElement("b");
    $key.classList.add("key");

    const $value = document.createElement("span");
    $value.classList.add("value");

    $div.append($key);
    $div.append($value);

    if (typeof key === "function") {
        $key.innerHTML = key();
    } else {
        $key.innerHTML = key;
    }

    if (typeof value === "function") {
        $value.innerHTML = value();
    } else {
        $value.innerHTML = value;
    }

    return $div;
}