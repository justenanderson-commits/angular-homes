import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      details works! {{ housingLocationId }}
    </p>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  housingLocationId = 0

  constructor() {
    // This might need to be fixed
    this.housingLocationId = Number(this.route.snapshot.params["id"])
  }
}

// Learning Notes
// Services can be used to interact with data (i.e. retrieve data from the data source)
