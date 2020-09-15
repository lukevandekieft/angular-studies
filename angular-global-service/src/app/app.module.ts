import { CreateCourseComponent } from './course/component/create-course/create-course.component';
import { CoursesListComponent } from './course/component/courses-list/courses-list.component';
import { CourseModule } from './course/course.module';
import { CoursesStoreService } from './store/courses-store.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes = [
  {
    path: 'courses',
    component: CoursesListComponent
  },
  {path: 'create-course', component: CreateCourseComponent},
  {path: '**', redirectTo: 'courses'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    CourseModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CoursesStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
