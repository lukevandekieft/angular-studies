import { Course } from './../../model/course.model';
import { CoursesStoreService } from '../../../store/courses-store.service';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import * as uuid from 'uuid';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html'
})
export class CreateCourseComponent implements OnInit {

  CoursesService : CoursesStoreService = new CoursesStoreService();

  constructor() { }

  ngOnInit() { }

  onSubmit(submittedForm) {
    console.log(submittedForm.value);

    if (submittedForm.invalid) {
      return;
    }

    const course: Course = {id: uuid.v4(), name: submittedForm.value.name, description: submittedForm.value.description};
    this.CoursesService.addCourse(course);
  }
}
