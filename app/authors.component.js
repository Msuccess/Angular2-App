System.register(['./auto-grow.directive', './author.services', 'angular2/core'], function(exports_1, context_1) {
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
    var auto_grow_directive_1, author_services_1, core_1;
    var AuthorsComponent;
    return {
        setters:[
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            },
            function (author_services_1_1) {
                author_services_1 = author_services_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AuthorsComponent = (function () {
                function AuthorsComponent(authorServices) {
                    this.Title = "Title for the Authors page";
                    this.authors = authorServices.getAuthors();
                }
                AuthorsComponent = __decorate([
                    core_1.Component({
                        selector: 'authors',
                        template: "\n    <H2>{{Title}}</H2>\n    <div>\n\n    <input type=\"text\" autoGrow />\n    <ul>\n    <li *ngFor=\"#author of authors\">\n    {{author}}\n    </li>\n    </ul>\n    \n    </div>\n    ",
                        providers: [author_services_1.AuthorServices],
                        directives: [auto_grow_directive_1.AuthoGrowDirectives]
                    }), 
                    __metadata('design:paramtypes', [author_services_1.AuthorServices])
                ], AuthorsComponent);
                return AuthorsComponent;
            }());
            exports_1("AuthorsComponent", AuthorsComponent);
        }
    }
});
//# sourceMappingURL=authors.component.js.map