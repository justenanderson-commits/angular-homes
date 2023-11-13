import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { HousingLocation } from '../housing-location'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

// This component will take input from the user to add a new housing location, which will require:
// Routing - done
// Add link to return to the home page - done
// Add button to header that links to the add location page - done
// Add styling for AddLocationComponent - done
// A button to submit the newly input data - done
// Form module decorator import things
// Find best way to assign an ID to the newly-added property:
  // ID = Add housingLocation.length + 1?
  // ID = date.now()?
// A TS file that shows the shape of the data to be received???
  // This may show an object like housing-location.ts, then programmatically add an ID to it.
  // Or can I just using housing-location.ts for this and have the ID assigned automatically somehow?
// A service to interact with the data
// Functions that will update the housing location array with the newly input data
// A confirmation message and/or a redirect to the details page on the newly added location

@Component({
  selector: 'app-add-location',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
  <div class="add-location-page">
    <a href="/">⬅ Back to Home Page</a>
    <section class="form-section">
      <form>
        <h1 class="section-heading">Add a new housing location</h1>
        <!-- The ID field needs to be generated and dynamically rendered. Then it can be passed in with the rest of the data when the form is submitted. -->
        <!-- <label></label>
        <input/> -->

        <label for="name">Location Name</label>
        <input id="name" type="text"/>

        <label for="city">City</label>
        <input id="city" type="text"/>

        <label for="state">State</label>
        <input id="state" type="text"/>

        <label for="photo">Image URL</label>
        <input id="photo" type="text"/>

        <label for="availableUnits">Number of units available</label>
        <input id="name" type="text"/>

        <p class="section-heading">Has wifi?</p>
        <div class="radio-buttons">
        <label for="wifi">Yes</label>
        <input id="wifi" name="wifi" type="radio" value="true"/>
        </div>
        <div class="radio-buttons">
          <label class="no-labels" for="wifi">No</label>
          <input id="wifi" name="wifi" type="radio" value="false"/>
        </div>
          
        <p class="section-heading">Has on-site laundry?</p>
        <div class="radio-buttons">
          <label for="laundry">Yes</label>
          <input id="laundry" name="laundry" type="radio" value="true"/>
        </div>
        <div class="radio-buttons">
          <label class="no-labels" for="laundry">No</label>
          <input id="laundry" name="laundry" type="radio" value="false"/>
        </div>
          
        <button class="add-location-button" type="submit" class="primary">Add location</button>
      </form>
    </section>
</div>
  `,
  styleUrls: ['./add-location.component.css'],
})
export class AddLocationComponent {
  addLocationForm = new FormGroup({
    id: new FormControl(11),
    name: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    photo: new FormControl(''),
    availableUnits: new FormControl(1),
    wifi: new FormControl(false),
    laundry: new FormControl(false),
  })
}
