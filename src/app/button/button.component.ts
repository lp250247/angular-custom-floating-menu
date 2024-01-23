import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FloatMenuComponent } from '../float-menu/float-menu.component';
import { OverlayModule } from '@angular/cdk/overlay';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, OverlayModule, FloatMenuComponent],
  styleUrl: './button.component.css',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  isOpen = false;

  constructor() {}

  close() {
    this.isOpen = false;
  }

  toggle(event: Event) {
    this.isOpen = !this.isOpen;
  }
}
