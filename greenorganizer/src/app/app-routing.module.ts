import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StartComponent} from "./start/start.component";
import {AboutComponent} from "./about/about.component";
import {CalculateComponent} from "./calculate/calculate.component";
import {CheckComponent} from "./start/check/check.component";

const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'check', component: CheckComponent },
  { path: 'calculate', component: CalculateComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: '**', redirectTo: '/start' } // Handle 404 - Page not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
