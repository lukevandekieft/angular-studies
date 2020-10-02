import { Component, OnInit } from '@angular/core';
import { CoursesStoreService } from '../store/courses-store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  constructor(public coursesStore: CoursesStoreService) { }

  ngOnInit() {
  }
}
