import { CdkOverlayOrigin, OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-float-menu',
  standalone: true,
  imports: [CommonModule, OverlayModule],
  templateUrl: './float-menu.component.html',
  styleUrl: './float-menu.component.css',
})
export class FloatMenuComponent {
  @Input({ required: true }) trigger!: CdkOverlayOrigin;
  @Input({ required: true }) show!: boolean;
  @Output() onClose = new EventEmitter();

  close(event: MouseEvent) {
    if (event.target != this.trigger.elementRef.nativeElement)
      this.onClose.emit();
  }

  openAlert() {
    alert('test');
  }
}
