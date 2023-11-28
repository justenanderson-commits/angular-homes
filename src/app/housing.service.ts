import { Injectable } from '@angular/core'
import { HousingLocation } from './housing-location'
import { HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:3000/locations'

  constructor(private http: HttpClientModule) {}

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

  async addHousingLocation(
    location: HousingLocation
  ): Promise<HousingLocation | undefined> {
    try {
      const data = await fetch(`${this.url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(location),
      })
      if (Response) {
        console.log('It worked')
      }
      return
    } catch (error) {
      console.log('Error adding location: ', error)
      return
    }
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log('Form inputs: ', firstName, lastName, ' ', email)
  }
}
