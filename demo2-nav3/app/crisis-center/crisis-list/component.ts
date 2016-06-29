/**
 * Created by laj on 2016/6/27.
 */
import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Crisis, CrisisService} from "../crisis.service";

@Component({
    selector: 'crisis-list'
    , templateUrl: './app/crisis-center/crisis-list/template.html'
    , styleUrls: ['./app/crisis-center/crisis-list/style.css']
})
export class CrisisListComponent implements OnInit, OnDestroy{
    crises: Crisis[];
    selectedId: number;
    private sub: any;

    constructor(
        private service: CrisisService
        ,private router: Router
        ,private route: ActivatedRoute
    ){
    }

    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
            this.selectedId = params['id'];
            this.service.getCrises().then(crises => this.crises = crises);
        })
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }

    onSelect(crisis: Crisis){
        this.router.navigate(['/crisis-center', crisis.id]);
    }
}