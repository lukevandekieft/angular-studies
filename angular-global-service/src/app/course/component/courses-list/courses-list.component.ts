import { Observable } from 'rxjs';
import { Course } from './../../model/course.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html'
})
export class CoursesListComponent implements OnInit {

  courses$: Observable<Course[]>;

  courseToBeUpdated: Course;

  isUpdateActivated = false;

  constructor() { }

  ngOnInit() {
  }

  // deleteCourse(courseId: string) {
  //   this.store.dispatch(courseActionTypes.deleteCourse({courseId}));
  // }

  // showUpdateForm(course: Course) {
  //   this.courseToBeUpdated = {...course};
  //   this.isUpdateActivated = true;
  // }

  // updateCourse(updateForm) {
  //   const update: Update<Course> = {
  //     id: this.courseToBeUpdated.id,
  //     changes: {
  //       ...this.courseToBeUpdated,
  //       ...updateForm.value
  //     }
  //   };

  //   this.store.dispatch(courseActionTypes.updateCourse({update}));

  //   this.isUpdateActivated = false;
  //   this.courseToBeUpdated = null;
  // }
}
