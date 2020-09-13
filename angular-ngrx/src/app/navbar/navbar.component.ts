import { AppState } from '../store/reducers/index';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }
}
