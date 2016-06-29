/**
 * Created by laj on 2016/6/29.
 */
import {Component,OnInit,OnDestroy} from "@angular/core";
import {Crisis,CrisisService} from "../crisis.service";
import {Router,ActivatedRoute} from "@angular/router";
import {DialogService} from "../../dialog.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/fromPromise';
import {CanComponentDeactivate} from "../interfaces";

@Component({
  templateUrl: 'app/crisis-center/crisis-detail/template.html'
    ,styleUrls: ['app/crisis-center/crisis-detail/style.css']
})
export class CrisisDetailComponent implements OnInit, OnDestroy, CanComponentDeactivate{
    crisis: Crisis;
    editName: string;
    sub: any;

    constructor(
        private service: CrisisService
        , private router: Router
        , private route: ActivatedRoute
        , private dialogSerivce: DialogService
    ){

    }

    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
           let id = +params['id'];
            this.service.getCrisis(id)
                .then(crisis => {
                    if (crisis){
                        this.editName = crisis.name;
                        this.crisis = crisis;
                    }
                    else{
                        this.gotoCrises();
                    }
                });
        });
    }

    ngOnDestroy(){
        if (this.sub){
            this.sub.unsubscribe();
        }
    }

    cancel(){
        this.editName = this.crisis.name;
        this.gotoCrises();
    }

    save(){
        this.crisis.name = this.editName;
        this.gotoCrises();
    }

    canDeactivate(): Observable<boolean>|boolean{
        if (!this.crisis || this.crisis.name == this.editName){
            return true;
        }

        let p = this.dialogSerivce.confirm("Discard changes?");
        let o = Observable.fromPromise(p);
        return o;
    }

    gotoCrises(){
        let crisisId = this.crisis ? this.crisis.id : null;
        this.router.navigate(['/crisis-center', {id: crisisId, foo: 'foo'}], {relativeTo: this.route});
    }
}