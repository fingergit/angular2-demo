"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var HeroDetailComponent = (function () {
    function HeroDetailComponent(route, router, heroService) {
        this.route = route;
        this.router = router;
        this.heroService = heroService;
    }
    // case 1: 如果使用上一页/下一页的形式显示不同的列表项，但不想HeroDetailComponent每次都创建和析构，可以使用订阅的方式，仅在id值变化时复用。
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.heroService.getHero(id).then(function (hero) { return _this.hero = hero; });
        });
    };
    HeroDetailComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    // case 2: 每次都要创建一个新的HeroDetailComponent实例，不需要订阅。
    // ngOnInit() {
    //     let id = +this.route.snapshot.params['id'];
    //     this.heroService.getHero(id).then(hero => this.hero = hero);
    // }
    HeroDetailComponent.prototype.goBack = function () {
        // window.history.back();
        this.router.navigate(['/heroes']);
    };
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-hero-detail',
            templateUrl: 'app/heroes/hero-detail/template.html',
            styleUrls: ['app/heroes/hero-detail/style.css']
        })
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 
//# sourceMappingURL=component.js.map