export function Cached(target,key,desc){
    var initializer = desc.get;
    desc.get = function(){
        return Object.defineProperty(this,key,{
            value:initializer()
        })[key];
    };
    return desc;
}