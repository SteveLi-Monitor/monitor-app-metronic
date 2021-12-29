import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sweetalert2',
  templateUrl: './sweetalert2.component.html',
})
export class Sweetalert2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onConfirm(): void {
    console.log('Confirmed');
  }

  onDismiss(): void {
    console.log('Dismissed');
  }
}
