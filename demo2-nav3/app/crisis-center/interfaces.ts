import {Observable} from "rxjs/Observable";
import {CanDeactivate} from "@angular/router";
/**
 * Created by laj on 2016/6/29.
 */

export interface CanComponentDeactivate{
    canDeactivate : () => boolean | Observable<boolean>;
}


export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>{
    canDeactivate(component: CanComponentDeactivate): Observable<boolean>|boolean{
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}