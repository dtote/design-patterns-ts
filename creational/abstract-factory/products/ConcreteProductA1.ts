import {AbstractProductA} from "./AbstractProductA";

export class ConcreteProductA1 implements AbstractProductA {
    public usefulFunctionA(): string {
        return 'The result of the product A1'
    }
}