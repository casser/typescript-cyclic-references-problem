This question is related to TypeScript, ES6, SystemJs and ReflectJs specs, but I would like to know you thoughts about it. 

So for a function declarations the sequence of code is not important, but for classes it is: 

### Example with single module 
```ts
console.info(fnc()); // this is fine
console.info(new Cls()); //TypeError: Cls is not a constructor
function fnc(){
  return "value"
}
class Cls {
  constructor(){
    //...
  }
}
```

A more complex example when classes located in different modules and have cross references in declaration phase like:

### Example with multiple modules and static references 

```ts
// one.ts
import {Two} from "./two"
class One {
  static two = new One();
}
// two.ts
import {One} from "./one"
class One {
  static two = new One(); //TypeError: One is not a function 
}
//main.ts
import {One} from "./one"
import {Two} from "./two"
console.info(One.two) 
console.info(Two.one)

```
so this is throwing error when trying to create One instace 

this can be hacked by using some cached getters, which can be somehow used to solve the main problem in runtime/loader :

```ts
// cached.ts
export function Cached(target,key,desc){
    var initializer = desc.get;
    desc.get = function(){
        return Object.defineProperty(this,key,{
            value:initializer()
        })[key];
    };
    return desc;
}
// one.ts
import {Cached} from "./cached";
import {Two} from "./two";
export class One {
    @Cached
    static get two():Two{
        return new Two()
    }
}
// two.ts
import {Cached} from "./cached";
import {One} from "./one";
export class Two {
    @Cached
    static get one():One{
        return new One();
    }
}
//main.ts
import {One} from "./one"
import {Two} from "./two"
console.info(One.two) 
console.info(Two.one)

```

I have prepared some demo to show hack on this problem, you can see bellow 
 
**Expected behavior:**

[Create and instance of `Cls` and out put it without errors. ](http://localhost:63342/test-typescript/cyclic-hack.html)

**Actual behavior:** 

[Throws a `TypeError` because of undeclared class](http://localhost:63342/test-typescript/cyclic-problem.html)

### Example of cyclic references problem in decoration phase
The other example is [annotators cyclic references problem](http://localhost:63342/test-typescript/cyclic-problem.html).

```ts
function Model(target){}
function Collection(target){}
function Field(target:any,key:any,desc?:any):any{
    var type:any = Reflect.getMetadata("design:type",target,key);
    document.write(`<pre>${target.constructor.name}.${key} : ${type?type.name:"<span style='color: red'>UNDEFINED ?</span>"}</pre>`);
}

@Model
export class User {
    @Field id:String;
    @Field name:String;
    @Field projects:Projects; // Project Is not defined yet
}

@Collection
export class Users extends Array<User> {}

@Model
export class Project {
    @Field id:String;
    @Field name:String;
    @Field author:User;
    @Field contributors:Users; // Users will not be defined 
                               // if we will change definition order
}

@Collection
export class Projects extends Array<Project>{}
```

I think this is *important* because frameworks like `Dependecy Injection (java guice)`, `ORM's` or `Serialization` frameworks will use this feature deeply, and user code should contain at least cross referenced types.

So the main reason for this problem is that declaration, decoration and execution phases of classes mixed in output. 

```js
__decorate([
    Field, 
    __metadata('design:type', Projects)
], User.prototype, "projects", void 0);
```

Potencial hack for this can be generate closure instead of direct type referance in metadata like:

```js
__decorate([
    Field, 
    __metadata('design:type', function(){return Projects})
], User.prototype, "projects", void 0);
```

which can be adjusted after module execution, but I think this is just a hack, and the right way will be finnaly define 
specification about *Loading, Declaration, Annotation, Decoration and Execution* phases of runtime which will support cyclic references. 


PS: AND AGAIN THANKS FOR `TYPESCRIPT` :)












