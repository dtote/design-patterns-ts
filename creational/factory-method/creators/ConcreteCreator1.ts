import {Product} from "../products/Product";
import {ConcreteProduct1} from "../products/ConcreteProduct1";
import {Creator} from "./Creator";

export class ConcreteCreator1 extends Creator {
    /**
     * Note that the signature of the method still uses the abstract product type, event though the concrete product is actually returned from the method.
     * This way the Creator can stay independant of concrete product classes.
     */
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    };
}