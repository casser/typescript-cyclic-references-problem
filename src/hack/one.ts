import {Cached} from "./cached";
import {Two} from "./two";

export class One {
    @Cached
    static get two():Two{
        return new Two()
    }
}