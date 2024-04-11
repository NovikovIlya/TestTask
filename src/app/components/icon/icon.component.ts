import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import * as iconsSvg from "@fortawesome/free-solid-svg-icons";
import { fromEvent, interval } from 'rxjs';
import { buffer, debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: "app-icon",
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: "./icon.component.html",
  styleUrl: "./icon.component.css",
})

export class IconComponent implements OnInit {
  randomIndex = 0;
  iconsSvg: any = iconsSvg;
  names: string[] = [];
  x = "fa0";
  clickDisabled = false;

  ngOnInit(): void {
    this.names = Object.keys(iconsSvg);
    const buttonClick = fromEvent(document.querySelector(".btn")!, "click");

    // буфер щелчков если больше 1
    buttonClick
      .pipe(buffer(buttonClick
        .pipe(debounceTime(3000))),
        filter((arr) => arr.length > 1)
      )
      .subscribe(() => {
        this.showRandomIcon();
      });
  }

  showRandomIcon() {
    if (this.clickDisabled) {
      return;
    }

    this.clickDisabled = true;

    setTimeout(() => {
      this.randomIndex = Math.floor(Math.random() * this.names.length);
      this.x = this.names[this.randomIndex];
      this.clickDisabled = false;
    }, 3000);
  }
}
