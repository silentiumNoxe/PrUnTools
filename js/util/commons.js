Object.requireNonNull = function (val) {
    if (val == null) {
        throw new Error("NullPointerException");
    }

    return val;
}

if (!HTMLElement.prototype.hide) {
    HTMLElement.prototype.hide = function () {
        this.classList.add("hidden");
    }
}

if (!HTMLElement.prototype.show) {
    HTMLElement.prototype.show = function () {
        this.classList.remove("hidden");
    }
}

if (!String.prototype.isBlank) {
    String.prototype.isBlank = function () {
        return this.isEmpty() || this.trim().length === 0;
    }
}

if (!String.prototype.isEmpty) {
    String.prototype.isEmpty = function () {
        return this.length === 0;
    }
}

function generateId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}