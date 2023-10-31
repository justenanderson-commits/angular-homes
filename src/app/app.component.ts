import { Component } from '@angular/core'
import { HomeComponent } from './home/home.component'

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main>
      <header class="brand-one">
        <img
          class="brand-logo"
          src="/assets/logo.svg"
          alt="logo"
          area-hidden="true"
        />
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent],
})
export class AppComponent {
  title = 'homes'
}

// Components have the logic (api calls, event handlers)
// Comps also have html templates - can be written in comp or its own file
// Same applies to CSS
