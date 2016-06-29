import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {HeroService} from "./heroes/hero.service";
import {DialogService} from "./dialog.service";

@Component({
    selector: 'my-app'
    ,templateUrl: './app/app.component.html'
    ,directives: [ROUTER_DIRECTIVES]
    ,providers: [HeroService, DialogService]
})
export class AppComponent {
    title = 'Tour of Heroes';
}
