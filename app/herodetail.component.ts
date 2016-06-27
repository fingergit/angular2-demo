/**
 * Created by laj on 2016/6/27.
 */
import {Component, OnInit, Input} from "@angular/core";
import {HeroService} from "./hero.service";
import {Hero} from "./hero";
import {RouteParams} from "@angular/router-deprecated";

@Component({
    selector: 'hero-detail'
    , templateUrl: 'app/hero-detail.component.html'
    , providers: [HeroService]
})
export class HeroDetailComponent implements OnInit{
    @Input()
    hero: Hero;
    heroId: number;
    constructor(private heroService: HeroService
                ,private routeParams: RouteParams){
    }

    ngOnInit(){
        let id = +this.routeParams.get('id');
        this.heroId = id;
    }
}