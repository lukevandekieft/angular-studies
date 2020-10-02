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
  private readonly _coursesSource = new BehaviorSubject<Course[]>([
    {'id': '120ef3', 'name': 'Calculus 203', 'description': 'The Limit Does not Exist!'},
    {'id': '120ef332ofewf', 'name': 'Organic Chemistry 301', 'description': 'So You Want to Be a Doctor?'},
    {'id': '120efewf', 'name': 'Constitutional Law 402', 'description': "I Don't Need Back-ups, I'm Going to Harvard"}
  ]);

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

  updateCourse(course: Course): void {
    const courses = this.getCourses().map(c =>
      c.id === course.id ? course : c
    );
    this._setCourses(courses);
  }
}