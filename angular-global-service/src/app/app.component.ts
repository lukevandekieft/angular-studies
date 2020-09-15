import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CoursesStoreService } from './store/courses-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'angular-ngrx-example';

  constructor(public coursesStore: CoursesStoreService) {}
}
