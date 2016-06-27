/**
 * Created by laj on 2016/6/27.
 */
import {Component, OnInit} from "@angular/core";
import {HeroService} from "./hero.service";
import {Hero} from "./hero";

@Component({
    selector: 'hero-list'
    , templateUrl: 'app/heroes.component.html'
})
export class HeroesComponent implements OnInit{
    heroes: Hero[];
    constructor(private heroService: HeroService){
    }

    ngOnInit(){
        this.getHeroes();
    }

    getHeroes(){
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
}