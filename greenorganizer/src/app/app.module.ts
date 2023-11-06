import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { CalculateComponent } from './calculate/calculate.component';
import { SourcesComponent } from './sources/sources.component';
import { AboutComponent } from './about/about.component';
import { ResultComponent } from './calculate/result/result.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './list/item/item.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    CalculateComponent,
    SourcesComponent,
    AboutComponent,
    ResultComponent,
    HeaderComponent,
    ListComponent,
    ItemComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
