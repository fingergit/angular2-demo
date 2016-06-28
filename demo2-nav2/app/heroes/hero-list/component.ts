/**
 * Created by laj on 2016/6/28.
 */
// TODO SOMEDAY: Feature Componetized like HeroCenter
import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';
import {Hero, HeroService} from "../hero.service";
@Component({
    selector: 'heroes'
    ,templateUrl: 'app/heroes/hero-list/template.html'
    ,styleUrls: ['app/heroes/hero-list/style.css']
})
export class HeroListComponent implements OnInit {
    heroes: Hero[];
    constructor(
        private router: Router
        ,private service: HeroService) { }
    ngOnInit() {
        this.service.getHeroes().then(heroes => this.heroes = heroes);
    }
    onSelect(hero: Hero) {
        this.router.navigate(['/hero', hero.id]);
    }
}
