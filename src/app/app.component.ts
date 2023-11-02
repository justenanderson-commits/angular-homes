import { Component } from '@angular/core'
import { HomeComponent } from './home/home.component'
import { RouterModule } from '@angular/router'

// Continue learning in Video 7 https://www.youtube.com/watch?v=kWbk-dOJaNQ

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
