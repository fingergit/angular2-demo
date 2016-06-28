import {provideRouter, RouterConfig} from "@angular/router";
import {CrisisListComponent} from "./crisis-list/component";
import {HeroesRoutes} from "./heroes/heroes.routes";
import {CrisisRoutes} from "./crisis-list/crisis.routes";

export const routes: RouterConfig = [
    ...HeroesRoutes, // 合并子route(注意前面的三个点，将里面的元素分散到外面的数组中)。
    // ...CrisisRoutes,
    { path: 'crisis-list', component: CrisisListComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];