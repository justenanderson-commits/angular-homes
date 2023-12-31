import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HousingLocation } from '../housing-location'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation
}

// Data is passed in components with @Input properties, allowing the data to flow from the parent to child element(s)
// An interface is a contract between us and the data. It shows the data's "shape".
// Property binding - ( i.e. [src]) - allows us to tell Angular that the value in quotes should be an actual value from the property class.
