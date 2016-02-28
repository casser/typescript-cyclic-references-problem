function Model(target){

}
function Collection(target){

}
function Field(target:any,key:any,desc?:any):any{
    var type:any = Reflect.getMetadata("design:type",target,key);
    document.write(`<pre>${target.constructor.name}.${key} : ${type?type.name:"<span style='color: red'>UNDEFINED ?</span>"}</pre>`);
}

@Model
export class User {
    @Field id:String;
    @Field name:String;
    @Field projects:Projects;
}

@Collection
export class Users extends Array<User> {}

@Model
export class Project {
    @Field id:String;
    @Field name:String;
    @Field author:User;
    @Field contributors:Users;
}

@Collection
export class Projects extends Array<Project>{}