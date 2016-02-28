System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function Cached(target, key, desc) {
        var initializer = desc.get;
        desc.get = function () {
            return Object.defineProperty(this, key, {
                value: initializer()
            })[key];
        };
        return desc;
    }
    exports_1("Cached", Cached);
    return {
        setters:[],
        execute: function() {
        }
    }
});
