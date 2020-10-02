import { Observable } from 'rxjs';
import { Course } from '../../model/course.model';
import { CoursesStoreService } from '../../../store/courses-store.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent {

  courseToBeUpdated: Course;

  isUpdateActivated = false;

  constructor(public coursesStore: CoursesStoreService) { }

  deleteCourse(course: Course) {
    this.coursesStore.removeCourse(course);
  }

  showUpdateForm(course: Course) {
    this.courseToBeUpdated = {...course};
    this.isUpdateActivated = true;
  }

  updateCourse(updateForm, id) {
    const updatedCourse: Course = {id: id, name: updateForm.value.name, description: updateForm.value.description};
    this.coursesStore.updateCourse(updatedCourse);

    this.isUpdateActivated = false;
    this.courseToBeUpdated = null;
  }s  
}
