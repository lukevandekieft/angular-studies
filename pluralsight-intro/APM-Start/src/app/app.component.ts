import { Component } from '@angular/core';

@Component({ // decorators tell Angular what this actually is (component? Module? Other?)
  selector: 'pm-root',
  templateUrl: './app.component.html',
  // template: `<div></div>`, <-- Inline template
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
