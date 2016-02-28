System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var User, Users, Project, Projects;
    function Model(target) {
    }
    function Collection(target) {
    }
    function Field(target, key, desc) {
        var type = Reflect.getMetadata("design:type", target, key);
        document.write("<pre>" + target.constructor.name + "." + key + " : " + (type ? type.name : "<span style='color: red'>UNDEFINED ?</span>") + "</pre>");
    }
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User() {
                }
                __decorate([
                    Field, 
                    __metadata('design:type', String)
                ], User.prototype, "id", void 0);
                __decorate([
                    Field, 
                    __metadata('design:type', String)
                ], User.prototype, "name", void 0);
                __decorate([
                    Field, 
                    __metadata('design:type', Projects)
                ], User.prototype, "projects", void 0);
                User = __decorate([
                    Model, 
                    __metadata('design:paramtypes', [])
                ], User);
                return User;
            }());
            exports_1("User", User);
            Users = (function (_super) {
                __extends(Users, _super);
                function Users() {
                    _super.apply(this, arguments);
                }
                Users = __decorate([
                    Collection, 
                    __metadata('design:paramtypes', [])
                ], Users);
                return Users;
            }(Array));
            exports_1("Users", Users);
            Project = (function () {
                function Project() {
                }
                __decorate([
                    Field, 
                    __metadata('design:type', String)
                ], Project.prototype, "id", void 0);
                __decorate([
                    Field, 
                    __metadata('design:type', String)
                ], Project.prototype, "name", void 0);
                __decorate([
                    Field, 
                    __metadata('design:type', User)
                ], Project.prototype, "author", void 0);
                __decorate([
                    Field, 
                    __metadata('design:type', Users)
                ], Project.prototype, "contributors", void 0);
                Project = __decorate([
                    Model, 
                    __metadata('design:paramtypes', [])
                ], Project);
                return Project;
            }());
            exports_1("Project", Project);
            Projects = (function (_super) {
                __extends(Projects, _super);
                function Projects() {
                    _super.apply(this, arguments);
                }
                Projects = __decorate([
                    Collection, 
                    __metadata('design:paramtypes', [])
                ], Projects);
                return Projects;
            }(Array));
            exports_1("Projects", Projects);
        }
    }
});
