import { AppState } from '../store/reducers/index';
import { getAllCourses } from '../course/store/course.selectors';
import { Observable } from 'rxjs';
import { Course } from '../course/model/course.model';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  courses$: Observable<Course[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.courses$ = this.store.select(getAllCourses);
    console.log(this.courses$);
  }
}
