import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NextNumberComponent } from './next-number/next-number.component';
import { DisplayTextComponent } from './display-text/display-text.component';
import { CenterNumberComponent } from './center-number/center-number.component';
import { PhonenumberComponent } from './phonenumber/phonenumber.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NextNumberComponent,
    DisplayTextComponent,
    CenterNumberComponent,
    PhonenumberComponent,
    DynamicComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
