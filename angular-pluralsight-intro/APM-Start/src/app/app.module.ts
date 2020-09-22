import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';

@NgModule({ // @NgModule decorator is what tells Angular to interpret this class as a module
  declarations: [ // List of all components in module
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule, // List of supporting modules
    FormsModule
  ],
  bootstrap: [AppComponent] // The component our app should start from
})
export class AppModule { }
