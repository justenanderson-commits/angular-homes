import { Injectable } from '@angular/core'
import { HousingLocation } from './housing-location'

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:300/locations'


  constructor() {}

  async getAllHousingLocations() : Promise<HousingLocation[]> {
    const data = await fetch(this.url)
    return await data.json() ?? []
  }

  getHousingLocationById(id: Number): HousingLocation | undefined {
    return this.housingLocationList.find(
      (housingLocation) => housingLocation.id === id
    )
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log('Form inputs: ', firstName, lastName, ' ', email)
  }
}
