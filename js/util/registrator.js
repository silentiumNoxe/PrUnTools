Object.defineProperty(Element.prototype, "component", {
    get: function () {
        return this.attributes.getNamedItem("is")?.value || this.localName;
    }
})

loadComponent();

const globalObserver = new MutationObserver((mutationList, observer) => {
    loadComponent();
});

globalObserver.observe(document.body, {childList: true, subtree: true});

function loadComponent() {
    const notDefined = document.body.querySelectorAll("*:not(:defined)");
    for (const elem of notDefined) {
        if (!customElements.get(elem.component)) {
            const url = "../component/"+elem.component + `/${elem.component}.js`;
            import(url)
                .then(module => {
                    try {
                        if (elem.attributes.getNamedItem("is")) {
                            customElements.define(elem.component, module.default, {extends: elem.localName});
                        } else {
                            customElements.define(elem.component, module.default);
                        }
                    } catch (e) {
                        console.warn("Fail to register web component -", e);
                    }
                })
                .catch(err => console.error("Fail load component", elem.component, err));
        }
    }
}