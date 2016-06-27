import {Component} from '@angular/core';
import {HeroesComponent} from "./heroes.component";
import {HeroDetailComponent} from "./herodetail.component";
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from "@angular/router-deprecated";
import {HeroService} from "./hero.service";

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html'
    ,directives: [ROUTER_DIRECTIVES, HeroesComponent,HeroDetailComponent]
    ,providers: [ROUTER_PROVIDERS, HeroService]
})
@RouteConfig([
    {
        path: '/hero-list'
        ,name: 'Heroes'
        ,component: HeroesComponent
    }
    ,{
        path: '/detail/:id'
        ,name: 'HeroDetail'
        ,component: HeroDetailComponent
        ,useAsDefault: true
    }
])
export class AppComponent {
    title: 'Tour of Heroes';
}
