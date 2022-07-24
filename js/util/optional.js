/** @template T*/
export default class Optional {

    /** @type T*/
    value;

    /**
     * @param value {T}
     * @return Optional<T>
     * */
    static of(value) {
        Object.requireNonNull(value);
        const obj = new Optional();
        obj.value = value;
        return obj;
    }

    /**
     * @return Optional<T>
     * */
    static empty() {
        return new Optional();
    }

    /**
     * @param value {T | null}
     * @return Optional<T>
     * */
    static ofNullable(value) {
        return value == null ? Optional.empty() : Optional.of(value);
    }

    constructor() {
        this.value = null;
    }

    /** @return {T} */
    get() {
        if (this.value == null) {
            throw new NullPointerException();
        }

        return this.value;
    }

    /**
     * @template T1, T
     * @param func {function(T): T1}
     * @return Optional<T1>
     * */
    map(func) {
        if (this.value == null) {
            return this;
        }

        return Optional.ofNullable(func(this.value));
    }

    /**
     * @param predicate {function(T): boolean}
     * @return Optional<T>
     * */
    filter(predicate) {
        if (this.value !== null && predicate(this.value)) {
            return this;
        }

        return Optional.empty();
    }

    /** @return {T} */
    orElse(val) {
        return this.isPresent() ? this.get() : val;
    }

    /**
     * @param producer {function}
     * @return {T}
     * */
    orElseGet(producer) {
        return this.isPresent() ? this.get() : producer();
    }

    /**
     * @param producer {function}
     * @return {T}
     * */
    orElseThrow(producer) {
        if (this.isPresent()) {
            return this.get();
        }

        throw producer();
    }

    /** @param callback {function}*/
    ifPresent(callback) {
        if (this.isPresent()) {
            callback(this.value);
        }
    }

    isEmpty() {
        return this.value == null;
    }

    isPresent() {
        return !this.isEmpty();
    }

    /** @return Promise<T> */
    toPromise() {
        return new Promise((resolve, reject) => {
            this.isPresent() ? resolve(this.value) : reject();
        })
    }
}