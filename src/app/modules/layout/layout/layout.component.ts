import { Component, OnInit } from '@angular/core';
import { ToggleComponent } from 'src/app/_metronic/kt/components';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    ToggleComponent.bootstrap();
  }
}
