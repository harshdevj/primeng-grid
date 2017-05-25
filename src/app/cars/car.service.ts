import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Car } from './car.model';

import 'rxjs';

@Injectable()
export class CarService {

    constructor(private http: Http) { }

    getCarsSmall() {
        return this.http.get('/assets/car.json')
            .toPromise()
            .then(res => <Car[]>res.json().data)
            .then(data => { return data; });
    }
}