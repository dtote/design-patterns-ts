import {AbstractFactory} from "./AbstractFactory";
import {AbstractProductA} from "../products/AbstractProductA";
import {ConcreteProductA2} from "../products/ConcreteProductA2";
import {AbstractProductB} from "../products/AbstractProductB";
import {ConcreteProductB2} from "../products/ConcreteProductB2";

/**
 * Each Concrete Factory has a corresponding product variant
 */
export class ConcreteFactory2 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}