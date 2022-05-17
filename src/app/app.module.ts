import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxButtonModule } from "devextreme-angular/ui/button"
import { DxTagBoxModule } from 'devextreme-angular';
import { Service } from './app.services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DxButtonModule,
    DxTagBoxModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
