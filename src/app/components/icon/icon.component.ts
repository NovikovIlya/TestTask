import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as iconsSvg from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})


export class IconComponent {
  randomIndex = 0
  iconsSvg : any = iconsSvg

  //массив имен
  names = Object.keys(iconsSvg)
  x = 'fa0'

  // метод рандомной иконки
  showRandomIcon() {
    setTimeout(() => {
      this.randomIndex = Math.floor(Math.random() * this.names.length);
      this.x = this.names[this.randomIndex]
    }, 3000);
  }
}
