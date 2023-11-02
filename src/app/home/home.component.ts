import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent ],
  template: `
   <section>
    <form>
      <input type='text' placeholder="Filter by city">
      <button class='primary' type='button'>Search</button>
    </form>
   </section>
   <section class='results'>
    <!-- ngFor is Angular's syntax for iterating over the housingLocation array -->
    <!-- This is like passing props in React -->
    <app-housing-location *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation"></app-housing-location>
   <section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // housingLocationList is a property of the home component class
  // the value is HousingLocation, its type is an array. Adding `= []` assigns it to an empty array, to which data will be later added.
  // Had to convert the JS dummy data to JSON and change id type to number in housing-location.ts
  housingLocationList: HousingLocation[] = []
  housingService: HousingService = inject(HousingService)

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations()
  }
}
