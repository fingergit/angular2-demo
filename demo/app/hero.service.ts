/**
 * Created by laj on 2016/6/27.
 */
import {Injectable} from '@angular/core';
import {HEROES} from "./mock-heroes";

@Injectable()
export class HeroService{
    getHeroes(){
        return Promise.resolve(HEROES);
    }
}