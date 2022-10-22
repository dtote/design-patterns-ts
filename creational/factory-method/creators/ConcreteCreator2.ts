import {Product} from "../products/Product";
import {ConcreteProduct2} from "../products/ConcreteProduct2";
import {Creator} from "./Creator";

export class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    };
}