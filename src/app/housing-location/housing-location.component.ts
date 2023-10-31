import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
   <section class="listing">
    <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
    <h2 class="listing-heading"></h2>
    <p class="listing-location"></p> 
   </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  // @Input() is an input decorator, which requires the @ symbol prefix and the parens at the end
  // The exclamation point is the non-null assertion operator. It tells tsc that the value won't be null or undefined
  @Input() housingLocation!:HousingLocation;
}

// Data is passed in components with @Input properties, allowing the data to flow from the parent to child element(s)
// An interface is a contract between us and the data. It shows the data's "shape".
// Property binding - ( i.e. [src]) - allows us to tell Angular that the value in quotes should be an actual value from the property class.