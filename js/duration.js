if (!String.prototype.contains) {
    String.prototype.contains = function (sub) {
        return this.indexOf(sub) > -1;
    }
}

export default class Duration {
    static ZERO = new Duration("0s");

    static DAYS = "d"
    static HOURS = "h";
    static MINUTES = "m";
    static SECONDS = "s";

    raw;
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;

    _inSeconds = 0;

    constructor(time) {
        if (time === "" || time == null) {
            throw "time cannot be empty";
        }

        for (const rune of time.split(" ")) {
            if (rune.contains(Duration.DAYS)) {
                this.days = Number.parseInt(rune.replace(Duration.DAYS));
            } else if (rune.contains(Duration.HOURS)) {
                this.hours = Number.parseInt(rune.replace(Duration.HOURS));
            } else if (rune.contains(Duration.MINUTES)) {
                this.minutes = Number.parseInt(rune.replace(Duration.MINUTES));
            } else if (rune.contains(Duration.SECONDS)) {
                this.seconds = Number.parseInt(rune.replace(Duration.SECONDS));
            }
        }

        this.raw = time;
        this._inSeconds = this.days*24*60*60+this.hours*60*60+this.minutes*60+this.seconds;
    }

    /**
     * @param time {string|Duration}
     * @return Duration
     * */
    add(time) {
        if (typeof time === "string") {
            time = new Duration(time);
        }

        let days = this.days + time.days;
        let hours = this.hours + time.hours;
        let minutes = this.minutes + time.minutes;
        let seconds = this.seconds +time.seconds;

        return new Duration(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }

    /**
     * @param time {string|Duration}
     * @return Duration
     * */
    sub(time) {
        let days = this.days - time.days;
        let hours = this.hours - time.hours;
        let minutes = this.minutes - time.minutes;
        let seconds = this.seconds - time.seconds;

        return new Duration(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }

    getSeconds() {
        return this._inSeconds;
    }

    getMinutes() {
        return this.getSeconds() / 60;
    }

    getHours() {
        return this.getMinutes() / 60;
    }

    getDays() {
        return this.getHours() / 24;
    }

    /**
     * @param x {Duration}
     * @return boolean
     * */
    less(x) {
        return this.getSeconds() < x.getSeconds();
    }

    /**
     * @param x {Duration}
     * @return boolean
     * */
    great(x) {
        return this.getSeconds() > x.getSeconds();
    }

    /**
     * @param x {Duration}
     * @return boolean
     * */
    equal(x) {
        return this.getSeconds() === x.getSeconds();
    }

    toString() {
        return this.raw;
    }
}