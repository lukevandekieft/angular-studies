import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({ // @NgModule decorator is what tells Angular to interpret this class as a module
  declarations: [ // List of all components in module
    AppComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule // List of supporting modules
  ],
  bootstrap: [AppComponent] // The component our app should start from
})
export class AppModule { }
