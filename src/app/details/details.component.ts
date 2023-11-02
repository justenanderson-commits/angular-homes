import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActivatedRoute } from '@angular/router'
import { HousingService } from '../housing.service'
import { HousingLocation } from '../housing-location'

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo" />
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">
          {{ housingLocation?.city }}, {{ housingLocation?.state }}
        </p>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  housingService: HousingService = inject(HousingService)
  housingLocation: HousingLocation | undefined

  constructor() {
    // This might need to be fixed
    const housingLocationId = Number(this.route.snapshot.params['id'])
    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationId)
  }
}

// Learning Notes
// Services can be used to interact with data (i.e. retrieve data from the data source)
