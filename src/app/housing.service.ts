import { Injectable } from '@angular/core'
import { HousingLocation } from './housing-location'

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:3000/locations'

  constructor() {}

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url)
    return (await data.json()) ?? []
  }

  async getHousingLocationById(
    id: Number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`)
    return (await data.json()) ?? {}
  }

  addHousingLocation(
    // It feels like this could be refactored to use type HousingLocation //
    id: number,
    name: string,
    city: string,
    state: string,
    photo: string,
    availableUnits: number,
    wifi: boolean,
    laundry: boolean) {

    console.log('Added location: ', name, city, state, 'photo: ', photo, availableUnits, 'wifi: ', wifi, 'laundry: ', laundry)
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log('Form inputs: ', firstName, lastName, ' ', email)
  }
}
