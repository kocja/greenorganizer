import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StartComponent} from "./start/start.component";
import {AboutComponent} from "./about/about.component";
import {CalculateComponent} from "./calculate/calculate.component";
import {CheckComponent} from "./start/check/check.component";
import {SourcesComponent} from "./sources/sources.component";
import {BrandsComponent} from "./sources/brands/brands.component";

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'start', component: StartComponent },
  { path: 'check', component: CheckComponent },
  { path: 'calculate', component: CalculateComponent },
  { path: 'team', component: SourcesComponent },
  { path: 'information', component: AboutComponent },
  { path: 'information/brands', component: BrandsComponent },
  { path: '**', redirectTo: '/check' } // Handle 404 - Page not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
