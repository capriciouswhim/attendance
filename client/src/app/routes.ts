import { Routes } from '@angular/router'
import { LandingPage } from '../page/landing/landingPage'

export const routes: Routes = [
    { path: '', component: LandingPage, pathMatch: 'full' },
]
