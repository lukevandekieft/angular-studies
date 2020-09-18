import { Component } from '@angular/core';

@Component({ // decorators tell Angular what this actually is
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
