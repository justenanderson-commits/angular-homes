import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// This component will take input from the user to add a new housing location, which will require:
  // Routing
  // Add link to return to the home page
  // Add button to header that links to the add location page
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
  <a href="/"><button>Return to Home Page</button></a>
  <p>Add Location Works!</p>
  `,
  styleUrls: ['./add-location.component.css']
})

export class AddLocationComponent {

}
