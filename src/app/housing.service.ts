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
// This function will need to be async once the POST is added to it //
  // It feels like these params could be refactored to use type HousingLocation? //
  addHousingLocation(id: number, name: string, city: string, state: string,
    photo: string, availableUnits: number, wifi: boolean,laundry: boolean) {
  
    console.log('Added location: ', 'id: ', id, 'name: ',name, 'city: ', city,',', state, 'photo url: ', photo, 'number of units: ', availableUnits, 'wifi: ', wifi, 'laundry: ', laundry)
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log('Form inputs: ', firstName, lastName, ' ', email)
  }
}
