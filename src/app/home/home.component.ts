import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HousingLocationComponent } from '../housing-location/housing-location.component'
import { HousingLocation } from '../housing-location'
import { HousingService } from '../housing.service'

// Continue https://www.youtube.com/watch?v=5K10oYJ5Y-E from 7:44

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter (input)="filterResults(filter.value)"/>
        <!-- <button class="primary" type="button" 
        (click)="filterResults(filter.value)"
        >Search</button> -->
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
      <section></section>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = []
  housingService: HousingService = inject(HousingService)
  filteredLocationList: HousingLocation[] = []

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList
      this.filteredLocationList = housingLocationList
    })
  }

  filterResults(city: string) {
    this.filteredLocationList = this.housingLocationList.filter(housinglocation => {
      return housinglocation.city.toLowerCase().includes(city.toLowerCase())
    })
  }
}

// Learning Notes:
// ngFor is Angular's syntax for iterating over the housingLocation array
