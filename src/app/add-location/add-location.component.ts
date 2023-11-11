import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// This component will take input from the user to add a new housing location, which will require:
  // Routing
  // Form module decorator import things
  // A TS file that shows the shape of the data to be received
  // A service to interact with the data
  // Functions that will update the housing location array with the newly input data
  // A button to submit the newly input data
  // A confirmation message and/or a redirect to the details page on the newly added location

@Component({
  selector: 'app-add-location',
  standalone: true,
  imports: [CommonModule],
  template: `
  <p>Add Location Works!</p>
  `,
  styleUrls: ['./add-location.component.css']
})

export class AddLocationComponent {

}
