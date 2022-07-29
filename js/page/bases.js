window.addEventListener("DOMContentLoaded", () => {
    initActionCallbacks();
});

function initActionCallbacks() {
    const actions = [
        "addBase"
    ];

    for (const action of actions) {
        this[action]();
    }
}

function addBase() {
    const eventName = "add";

    const target = new EventTarget();
    target.addEventListener(eventName, () => {
        const planet = window.prompt("Enter planet id or name", "");
        if (!planet) {
            throw new Error("Planet id or name cannot be empty");
        }

        const windowBase = document.createElement("base-window");
        windowBase.setAttribute("planet", planet);
        document.querySelector("[data-list='base']").append(windowBase);
    });

    document.querySelector(`[data-action="${eventName}"]`)
        .addEventListener("click", () => target.dispatchEvent(new CustomEvent(eventName)));
}