import { Component } from '@angular/core'; // @angular/core is just another module! Reading '@angular/core' you will find the 'Component' attribute. We need to tell this page where to find the function

@Component({ // DECORATOR: metadata for our class
  selector: 'welcome-component', // SELECTOR: the DIRECTIVE for calling directly in HTML
  templateUrl: './welcome.component.html' // TEMPLATE: the HTML used. Here it's a URL local path
}) // No semicolon! It's an attribute
// @Component is a built-in decorator but it's possible to build your own like @exportInfo

export class WelcomeComponent { // CLASS: properties and functions needed by our view
  public pageTitle: string = 'Welcome'; // PROPERTY: name = pageTitle, datatype = string, value = 'Welcome'

  // METHOD:
}
// export: since this available in a reusable manner elsewhere it's an ES module! (EcmaScript)