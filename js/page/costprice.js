import * as Factory from "../factory.js";

document.querySelector("[data-type='selected-factory']")
    .addEventListener("keydown", function (event) {
        if (this.value.length === 0) {
            return;
        }

        if (event.code === "Enter") {
            const factory = Factory[this.value.toUpperCase()];
            if (factory == null) {
                drawWarnNoFactory(this.value.toUpperCase());
            }

            drawFactory(factory);
        }
});

/** @param data {Factory} */
function drawFactory(data) {
    const $factory = document.querySelector(".right > [data-type='factory']");

    data.getMaterials()
}

function drawWarnNoFactory(search) {
    const $factory = document.querySelector(".right > [data-type='factory']");
    const $h2 = document.createElement("h2");
    $h2.textContent = `Factory ${search} not found`;
    $factory.append($h2);
}