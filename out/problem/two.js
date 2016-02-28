System.register(["./one"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var one_1;
    var Two;
    return {
        setters:[
            function (one_1_1) {
                one_1 = one_1_1;
            }],
        execute: function() {
            Two = (function () {
                function Two() {
                }
                Two.one = new one_1.One();
                return Two;
            }());
            exports_1("Two", Two);
        }
    }
});
