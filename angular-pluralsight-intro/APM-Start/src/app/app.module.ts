import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star/star.component';

@NgModule({ // @NgModule decorator is what tells Angular to interpret this class as a module
  declarations: [ // List of all components in module
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    BrowserModule, // List of supporting modules
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent] // The component our app should start from
})
export class AppModule { }
