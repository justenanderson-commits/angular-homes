import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

// This component will take input from the user to add a new housing location, which will require:
  // Routing - done
  // Add link to return to the home page - done
  // Add button to header that links to the add location page - done
  // Form module decorator import things
    // Find best way to assign an ID to the newly-added property:
        // ID = Add housingLocation.length + 1?
        // ID = date.now()?
  // A TS file that shows the shape of the data to be received
    // This may show an object like housing-location.ts, then programmatically add an ID to it.
    // Or can I just using housing-location.ts for this and have the ID assigned automatically somehow?
  // A service to interact with the data
  // Functions that will update the housing location array with the newly input data
  // A button to submit the newly input data
  // A confirmation message and/or a redirect to the details page on the newly added location

@Component({
  selector: 'app-add-location',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
  <a href="/"><button>Return to Home Page</button></a>
  <p>Add Location Works!</p>
  `,
  styleUrls: ['./add-location.component.css']
})

export class AddLocationComponent {

  addLocationForm = new FormGroup(
    {
      id: new FormControl(11),
      name: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      photo: new FormControl(''),
      availableUnits: new FormControl(1),
      wifi: new FormControl(false),
      laundry: new FormControl(false)
    }
  )

}
