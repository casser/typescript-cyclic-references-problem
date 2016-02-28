import {Cached} from "./cached";
import {One} from "./one";
export class Two {
    @Cached
    static get one():One{
        return new One();
    }
}