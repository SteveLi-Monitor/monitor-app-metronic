import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-menu-section',
  templateUrl: './aside-menu-section.component.html',
})
export class AsideMenuSectionComponent implements OnInit {
  constructor() {}

  @Input()
  description: string | undefined;

  ngOnInit(): void {}
}
