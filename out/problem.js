System.register(["./problem/one", "./problem/two"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var one_1, two_1;
    return {
        setters:[
            function (one_1_1) {
                one_1 = one_1_1;
            },
            function (two_1_1) {
                two_1 = two_1_1;
            }],
        execute: function() {
            console.info(one_1.One.two);
            console.info(two_1.Two.one);
        }
    }
});
