import {Component, ViewContainerRef} from '@angular/core';

import {WorkoutHistoryComponent} from '../workout-history/workout-history.component';

@Component({
  selector: 'trainer-app',
  template: `<div class="navbar navbar-default navbar-fixed-top top-navbar">
                <div class="container app-container">
                  <header></header>
                </div>
             </div>
             <div class="container body-content app-container">
                <router-outlet></router-outlet>
             </div>`
})
export class TrainerAppComponent {
}
