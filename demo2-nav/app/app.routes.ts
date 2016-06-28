import {CrisisListComponent} from "./crisis-list/component";
import {HeroListComponent} from "./hero-list/component";
import {provideRouter, RouterConfig} from "@angular/router";

export const routes: RouterConfig = [
    { path: 'crisis-list', component: CrisisListComponent },
    { path: 'hero-list', component: HeroListComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];