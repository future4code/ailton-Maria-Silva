import { BaseError } from "./BaseError";

export class TokenDidntPass extends BaseError{
    constructor(){
        super("O token deve ser passado",404)
    }
}