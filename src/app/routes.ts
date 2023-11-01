import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { DetailsComponent } from './details/details.component'

const routeConfig: Routes = [{
  path: '',
  component: HomeComponent,
  title: 'Home Page'
}, 
{
  path: 'details/:id',
  component: DetailsComponent,
  title: "Details Page"
}]

export default routeConfig

// Learning Notes:
// Routes is an array of objects
// Each route is an object literal with the properties path, component, and title
// The `:id` is a placeholder for parameterized routing