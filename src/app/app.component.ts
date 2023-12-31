import { Component } from '@angular/core'
import { HomeComponent } from './home/home.component'
import { RouterModule } from '@angular/router'

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main>
      <header class="brand-one">
        <a href="/">
          <img
            class="brand-logo"
            src="/assets/logo.svg"
            alt="logo"
            area-hidden="true"
          />
        </a>
        <a href="/add-location">
          <button class="primary">Add New Location</button>
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
