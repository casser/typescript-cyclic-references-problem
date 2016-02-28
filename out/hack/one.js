System.register(["./cached", "./two"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var cached_1, two_1;
    var One;
    return {
        setters:[
            function (cached_1_1) {
                cached_1 = cached_1_1;
            },
            function (two_1_1) {
                two_1 = two_1_1;
            }],
        execute: function() {
            One = (function () {
                function One() {
                }
                Object.defineProperty(One, "two", {
                    get: function () {
                        return new two_1.Two();
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    cached_1.Cached, 
                    __metadata('design:type', two_1.Two)
                ], One, "two", null);
                return One;
            }());
            exports_1("One", One);
        }
    }
});
