import {Builder} from "./Builder";
import {Product1} from "../Product1";

/**
 * The Concrete Builder classes follow the Builder interface and provide specific implementations
 * of the building steps. Your program may have several variations of Builders, implemented differently.
 */
export class ConcreteBuilder1 implements Builder {
    private product: Product1

    /**
     * A fresh builder instance should contain a blank product object, which is used in further assembly
     */
    constructor() {
        this.reset()
    }

    public reset(): void {
        this.product = new Product1()
    }

    /**
     * All production steps work with the same product instance
     */
    public producePartA() {
        this.product.parts.push('PartA1')
    }

    public producePartB() {
        this.product.parts.push('PartB1')
    }

    public producePartC() {
        this.product.parts.push('PartC1')
    }

    /**
     * Concrete Builders are supposed to provide their own methods for retrieving results.
     * That's because various types of builders may create entirely different products that don't
     * follow the same interface. Therefore, such methods cannot be declared in the base Builder interface
     * (at least in a statically typed programming language)
     *
     * Usually, after returning the end result to the client, a builder instance is expected to be ready to start
     * producing another product. That's why it's a usual practice to call the reset method at the end of the `getProduct`
     * method body. However, this behavior is not mandatory, and you can make your builders wait for an explicit reset call
     * from the client code before disposing of the previous result.
     */
    public getProduct(): Product1 {
        const result = this.product;
        this.reset();
        return result;
    }
}