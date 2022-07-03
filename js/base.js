export default class Base {

    /** @type Planet*/
    planet;
    /** @type Array<Factory> */
    factories = [];

    /** @param planet {Planet}*/
    constructor(planet) {
        this.planet = planet;
    }

    /** @param factory {Factory} */
    addFactory(factory) {
        this.factories.push(factory);
    }
}