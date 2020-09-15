import { Course } from './../../model/course.model';
import { CoursesStoreService } from '../../../store/courses-store.service';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import * as uuid from 'uuid';
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html'
})
export class CreateCourseComponent implements OnInit {

  constructor(public coursesStore: CoursesStoreService, private router: Router) { }

  ngOnInit() { }

  onSubmit(submittedForm) {
    console.log(submittedForm.value);

    if (submittedForm.invalid) {
      return;
    }

    const course: Course = {id: uuid.v4(), name: submittedForm.value.name, description: submittedForm.value.description};
    this.coursesStore.addCourse(course);
    this.router.navigate(['/courses'])
  }
}
