/**
 * The Director is only responsible for executing the building steps in a particular sequence. It is helpful when producing products
 * according to a specific order or configuration. Strictly speaking, the Director class is optional, since the client can control
 * builders directly
 */
import {Builder} from "./builders/Builder";

export class Director {
    private builder: Builder

    /**
     * The Director works with any builder instance that the client code passes to it. This way, the client code may alter the final
     * type of the newly assembled product
     */
    public setBuilder(builder: Builder): void {
        this.builder = builder
    }

    /**
     * The Director can construct several product variations using the same building steps
     */
    public buildMinimalViableProduct(): void {
        this.builder.producePartA()
    }

    public buildFullFeaturedProduct(): void {
        this.builder.producePartA()
        this.builder.producePartB()
        this.builder.producePartC()
    }
}