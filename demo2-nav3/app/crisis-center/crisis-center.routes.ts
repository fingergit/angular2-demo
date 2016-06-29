import {RouterConfig} from "@angular/router";
import {CrisisCenterComponent} from "./crisis-center/component";
import {CrisisDetailComponent} from "./crisis-detail/component";
import {CrisisListComponent} from "./crisis-list/component";
import {CanDeactivateGuard} from "./interfaces";

export const CrisisCenterRoutes: RouterConfig = [
    {
        path: ''
        , redirectTo: '/crisis-center'
        , terminal: true
    }
    ,{
        path: 'crisis-center'
        , component: CrisisCenterComponent
        , children: [
            {
                path: ':id'
                , component: CrisisDetailComponent
                , canDeactivate: [CanDeactivateGuard]
            }
            ,{
                path: ''
                , component: CrisisListComponent
            }
        ]
    }
];