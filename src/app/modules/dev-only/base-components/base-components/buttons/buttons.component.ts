import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
  constructor() {}

  showIndicator: 'on' | null = null;

  ngOnInit(): void {}

  onClick(): void {
    if (!this.showIndicator) {
      this.showIndicator = 'on';

      setTimeout(() => {
        this.showIndicator = null;
      }, 1000);
    }
  }
}
