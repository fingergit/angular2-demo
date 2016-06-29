/**
 * Created by laj on 2016/6/27.
 */
import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {CrisisService} from "../crisis.service";

@Component({
    selector: 'crisis-center'
    , templateUrl: './app/crisis-center/crisis-center/template.html'
    , directives: [ROUTER_DIRECTIVES]
    , providers: [CrisisService]
})
export class CrisisCenterComponent{
}