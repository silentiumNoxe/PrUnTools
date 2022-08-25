import * as Factory from "../../factory.js";
import * as Recipe from "../../recipe.js";

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
        $factory.append(drawRecipe(recipe));
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
    $fieldset.innerHTML = `<legend>${recipe.target.ticker}</legend>`;

    $fieldset.append(drawKV(`Time (${timeFormat})`, recipe.duration.getInFormat(timeFormat).toFixed(2)));
    $fieldset.append(drawKV("Result", recipe.getAmount()));

    $fieldset.append(document.createElement("hr"));

    for (const mat of recipe.materials) {
        if (!mat.type) {
            continue;
        }
        const $b = document.createElement("span")


        $b.innerHTML = `<b>${mat.type.ticker}</b> - ${mat.amount} (price) `;
        $fieldset.append($b);
    }

    return $fieldset;
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

function drawWarnNoFactory(search) {
    const $factory = document.querySelector(".right > [data-type='factory']");
    const $h2 = document.createElement("h2");
    $h2.textContent = `Factory ${search} not found`;
    $factory.append($h2);
}