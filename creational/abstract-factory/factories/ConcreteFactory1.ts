import {AbstractFactory} from "./AbstractFactory";
import {AbstractProductA} from "../products/AbstractProductA";
import {ConcreteProductA1} from "../products/ConcreteProductA1";
import {AbstractProductB} from "../products/AbstractProductB";
import {ConcreteProductB1} from "../products/ConcreteProductB1";

/**
 * Concrete factories produce a family of products that belong to a single variant.
 * The factory guarantees that resulting products are compatible.
 * Note that signatures of the Concrete Factory's method return an abstract product, while
 * inside the method a concrete product is instantiated.
 */
export class ConcreteFactory1 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}