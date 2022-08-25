function savePrice() {
    const ticker = document.querySelector("[data-type='ask-price-ticker']").value;
    const price = document.querySelector("[data-type='ask-price-value']").value;

    if (!ticker && !price) {
        return;
    }

    const data = JSON.parse(localStorage.getItem(`price-${ticker.toUpperCase()}`) || "{}");
    data.ask = Number.parseFloat(price);

    console.debug("Save price", ticker.toUpperCase(), data);
    localStorage.setItem(`price-${ticker.toUpperCase()}`, JSON.stringify(data));
}