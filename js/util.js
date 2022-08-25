document.create = function (nodeName, options={}) {
    return Object.assign(document.createElement(nodeName), options);
}