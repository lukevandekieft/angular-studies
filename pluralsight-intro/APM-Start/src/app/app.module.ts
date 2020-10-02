import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';

@NgModule({ // @NgModule decorator is what tells Angular to interpret this class as a module
  declarations: [ // List of all components in module
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule, // List of supporting modules
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' } // typically a 404 page
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent] // The component our app should start from
})
export class AppModule { }
