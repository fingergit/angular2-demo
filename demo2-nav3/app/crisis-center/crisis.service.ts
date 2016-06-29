/**
 * Created by laj on 2016/6/28.
 */
import { Injectable } from '@angular/core';
export class Crisis {
    constructor(public id: number, public name: string) { }
}
let CRISES = [
    new Crisis(1, 'Dragon Burning Cities'),
    new Crisis(2, 'Sky Rains Great White Sharks'),
    new Crisis(3, 'Giant Asteroid Heading For Earth'),
    new Crisis(4, 'Procrastinators Meeting Delayed Again'),
];

let crisisPromise = Promise.resolve(CRISES);
@Injectable()
export class CrisisService {
    getCrises() { return crisisPromise; }
    getCrisis(id: number | string) {
        return crisisPromise
            .then(crises => crises.filter(h => h.id === +id)[0]);
    }
}
