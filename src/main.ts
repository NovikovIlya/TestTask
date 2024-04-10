import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { IconComponent } from "./app/components/icon/icon.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <app-icon></app-icon>
  `,
    imports: [IconComponent,FontAwesomeModule]
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
