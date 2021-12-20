import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss'],
})
export class ToastsComponent implements OnInit {
  @ViewChild('toast')
  private toastElement: ElementRef | undefined;

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    if (this.toastElement) {
      bootstrap.Toast.getOrCreateInstance(
        this.toastElement.nativeElement
      ).show();
    }
  }
}
