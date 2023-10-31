import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
   <section class="listing">
    <img class="listing-photo">
    <h2 class="listing-heading"></h2>
    <p class="listing-location"></p> 
   </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {

}

// Data is passed in components with @Input properties, allowing the data to flow from the parent to child element(s)
// An interface is a contract between us and the data. It shows the data's "shape".