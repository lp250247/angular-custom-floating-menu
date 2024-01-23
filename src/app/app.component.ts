import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @HostListener('window:keydown', ['$event'])
  onKeyDown() {
    this.toggleOverlay();
  }
  overlayButtonShow = true;

  toggleOverlay() {
    this.overlayButtonShow = !this.overlayButtonShow;
  }

  alert() {
    alert('test');
  }
}
