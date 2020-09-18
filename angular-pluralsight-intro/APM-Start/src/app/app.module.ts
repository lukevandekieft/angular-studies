import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({ // @NgModule decorator is what tells Angular to interpret this class as a module
  declarations: [ // List of all components in module
    AppComponent
  ],
  imports: [
    BrowserModule // List of supporting modules
  ],
  bootstrap: [AppComponent] // The component our app should start fromt
})
export class AppModule { }
