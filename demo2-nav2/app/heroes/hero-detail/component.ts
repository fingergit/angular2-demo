import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import {HeroService, Hero} from "../hero.service";

@Component({
    selector: 'my-hero-detail'
    ,templateUrl: 'app/heroes/hero-detail/template.html'
    ,styleUrls: ['app/heroes/hero-detail/style.css']
})
export class HeroDetailComponent implements OnInit, OnDestroy {
    hero: Hero;
    private sub: any;

    constructor(
        private route: ActivatedRoute
        , private router: Router
        , private heroService: HeroService) {
    }

    // case 1: 如果使用上一页/下一页的形式显示不同的列表项，但不想HeroDetailComponent每次都创建和析构，可以使用订阅的方式，仅在id值变化时复用。
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.heroService.getHero(id).then(hero => this.hero = hero);
        });
    }

    ngOnDestroy() {
        if (this.sub){
            this.sub.unsubscribe();
        }
    }

    // case 2: 每次都要创建一个新的HeroDetailComponent实例，不需要订阅。
    // ngOnInit() {
    //     let id = +this.route.snapshot.params['id'];
    //     this.heroService.getHero(id).then(hero => this.hero = hero);
    // }

    goBack() {
        // window.history.back();
        this.router.navigate(['/heroes']);
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */