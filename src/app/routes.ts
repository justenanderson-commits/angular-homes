import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { DetailsComponent } from './details/details.component'
import { AddLocationComponent } from './add-location/add-location.component'

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Details Page',
  },
  {
    path: 'add-location',
    component: AddLocationComponent,
    title: 'Add New Location',
  },
]

export default routeConfig
