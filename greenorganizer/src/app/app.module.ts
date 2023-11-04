import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { CalculateComponent } from './calculate/calculate.component';
import { SourcesComponent } from './sources/sources.component';
import { AboutComponent } from './about/about.component';
import { ResultComponent } from './calculate/result/result.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    CalculateComponent,
    SourcesComponent,
    AboutComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
