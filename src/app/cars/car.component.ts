import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';
import { Car } from './car.model';

@Component({
    selector: 'cars',
    template: `
        <p-dataTable [value]="cars" scrollable="true" scrollHeight="calc(100vh - 1.9rem)">
            <p-column field="vin" header="Vin"></p-column>
            <p-column field="year" header="Year"></p-column>
            <p-column field="brand" header="Brand"></p-column>
            <p-column field="color" header="Color"></p-column>
        </p-dataTable>
    `,
    providers: [CarService]
})
export class DataTableDemo implements OnInit {

    cars: Car[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);
    }
}