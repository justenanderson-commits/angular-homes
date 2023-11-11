import { Component } from '@angular/core'
import { HomeComponent } from './home/home.component'
import { RouterModule } from '@angular/router'

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main>
      <!-- Add an anchor tag to route back to home page here: -->
      <header class="brand-one">
        <img
          class="brand-logo"
          src="/assets/logo.svg"
          alt="logo"
          area-hidden="true"
        />
      <!-- Add styling and conditionally render this link. It should disappear when the URL is /add-location -->
        <a href="/add-location">
          <button class="primary">Add New Location
</button>
          </a>
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule],
})
export class AppComponent {
  title = 'homes'
}

// Components have the logic (api calls, event handlers)
// Comps also have html templates - can be written in comp or its own file
// Same applies to CSS
