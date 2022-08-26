import * as Factory from "../../factory.js";
import * as Recipe from "../../recipe.js";
import * as Workforce from "../../workforce.js";
import RecipeView from "../../component/RecipeView.js";

(function () {
    document.querySelector("[data-type='selected-factory']")
        .addEventListener("keydown", function (event) {
            if (this.value.length === 0) {
                return;
            }

            if (event.code === "Enter") {
                localStorage.setItem("factory", this.value);
                drawFactory();
            }
        });

    document.querySelector("[data-type='selected-planet']")
        .addEventListener("keydown", function (event) {

            if (this.value.length === 0) {
                return;
            }

            if (event.code === "Enter") {
                localStorage.setItem("planet", this.value);
                drawFactory();
            }
        });

    const $timeFormat = document.querySelector("[data-type='selected-time-format']");
    const timeFormat = localStorage.getItem("time-format") || "h";
    for (const opt of $timeFormat.options) {
        if (opt.value === timeFormat) {
            opt.selected = true;
        }
    }

    const $exchange = document.querySelector("[data-type='selected-exchange']");
    const exchange = localStorage.getItem("selected-exchange") || "CI1";
    for (const opt of $exchange.options) {
        if (opt.value === exchange) {
            opt.selected = true;
        }
    }

    $timeFormat.addEventListener("change", function () {
        localStorage.setItem("time-format", this.options[this.selectedIndex].value);
        drawFactory();
    })

    document.querySelector("[data-type='markup']").addEventListener("keydown", function (event) {
        if (this.value.length === 0) {
            return;
        }

        if (event.code === "Enter") {
            localStorage.setItem("markup", this.value);
        }
    });
})();

function clear() {
    document.querySelector(".right > [data-type='factory']").innerHTML = "";
}

function drawFactory() {
    clear();

    const factoryTicker = localStorage.getItem("factory").toUpperCase();

    const factory = Factory[factoryTicker];
    if (factory == null) {
        drawWarnNoFactory(factoryTicker);
    }

    const $factory = document.querySelector(".right > [data-type='factory']");

    for (const recipe of Recipe.findByFactory(factoryTicker)) {
        $factory.append(new RecipeView(recipe).render());
        // $factory.append(drawRecipe(recipe));
    }
}

/**
 * @param recipe {Recipe}
 * @return HTMLElement
 * */
function drawRecipe(recipe) {
    const timeFormat = localStorage.getItem("time-format") || "h";

    const $fieldset = document.createElement("fieldset");
    $fieldset.classList.add("recipe");
    $fieldset.innerHTML = `<legend>${recipe.target == null ? "???" : recipe.target.ticker}</legend>`;

    $fieldset.append(drawKV(`Time (${timeFormat})`, recipe.duration.getInFormat(timeFormat).toFixed(2)));
    $fieldset.append(drawKV("Result", recipe.getAmount()));

    $fieldset.append(drawKV("Cost Price", costprice(recipe).toFixed(2)));

    $fieldset.append(document.createElement("hr"));

    const $bottom = document.createElement("div");
    $bottom.classList.add("bottom");
    $fieldset.append($bottom);

    $bottom.append(amountTable(recipe));

    return $fieldset;
}

/**
 * @param recipe {Recipe}
 * @return HTMLElement
 * */
function amountTable(recipe) {
    const $amount = document.createElement("div");
    const $table = document.createElement("table");
    $amount.append($table);

    const $head = document.createElement("tr");
    $head.innerHTML = "<th>Ticker</th><th>Amount</th><th>Price</th><th>Sum</th>";
    $table.append($head);

    const materials = recipe.materials;

    for (const workforce of recipe.targetFactory.getWorkforce()) {
        const worker = Workforce[workforce.type];
        if (worker == null) {
            console.warn("no worker data", workforce.type);
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

    for (const mat of materials) {
        const ticker = mat.type == null ? "???" : mat.type.ticker.toUpperCase();
        const price = JSON.parse(localStorage.getItem(`price-${ticker}`) || "{}").ask || 0;

        const $row = document.createElement("tr");
        $row.innerHTML = `<td>${ticker}</td><td>${mat.amount}</td><td>${price}</td><td>${(mat.amount * price).toFixed(2)}</td>`;
        $table.append($row);
    }

    return $amount;
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

/** @param recipe {Recipe}*/
function costprice(recipe) {
    const materials = recipe.materials;

    for (const workforce of recipe.targetFactory.getWorkforce()) {
        const worker = Workforce[workforce.type];
        if (worker == null) {
            console.warn("no worker data", workforce.type);
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

    let sum = 0;

    for (const mat of materials) {
        if (!mat.type) {
            continue;
        }

        const price = JSON.parse(localStorage.getItem(`price-${mat.type.ticker}`) || "{}").ask || 0;
        sum += price * mat.amount;
    }

    return sum / recipe.getAmount();
}

function drawWarnNoFactory(search) {
    const $factory = document.querySelector(".right > [data-type='factory']");
    const $h2 = document.createElement("h2");
    $h2.textContent = `Factory ${search} not found`;
    $factory.append($h2);
}