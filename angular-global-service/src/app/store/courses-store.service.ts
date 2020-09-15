// todos-store.service.ts
import { Course } from '../course/model/course.model';
import { CourseModule } from '../course/course.module';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CoursesStoreService {
  // Make _coursesSource private so it's not accessible from the outside, 
  // expose it as courses$ observable (read-only) instead.
  // Write to _coursesSource only through specified store methods below.
  private readonly _coursesSource = new BehaviorSubject<Course[]>([]);

  // Exposed observable (read-only).
  readonly courses$ = this._coursesSource.asObservable();

  constructor() {}

  // Get last value without subscribing to the courses$ observable (synchronously).
  getCourses(): Course[] {
    return this._coursesSource.getValue();
  }

  private _setCourses(courses: Course[]): void {
    this._coursesSource.next(courses);
  }

  addCourse(course: Course): void {
    const courses = [...this.getCourses(), course];
    this._setCourses(courses);
    console.log(courses)
  }

  removeCourse(course: Course): void {
    const courses = this.getCourses().filter(p => p.id !== course.id);
    this._setCourses(courses);
  }
}