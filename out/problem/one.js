System.register(["./two"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var two_1;
    var One;
    return {
        setters:[
            function (two_1_1) {
                two_1 = two_1_1;
            }],
        execute: function() {
            One = (function () {
                function One() {
                }
                One.two = new two_1.Two();
                return One;
            }());
            exports_1("One", One);
        }
    }
});
