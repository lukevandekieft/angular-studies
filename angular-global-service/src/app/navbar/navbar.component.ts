import { Observable } from 'rxjs';
import { Course } from '../course/model/course.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  courses$: Observable<Course[]>;

  constructor() { }

  ngOnInit() {
  }
}
