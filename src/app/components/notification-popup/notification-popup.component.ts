import { Component, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
}

@Component({
  selector: 'app-notification-popup',
  templateUrl: './notification-popup.component.html',
  styleUrls: ['./notification-popup.component.scss']
})
export class NotificationPopupComponent {
  @Input() isOpen = false;
  @Input() notifications: Notification[] = [];
  @Output() close = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:mousedown', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.close.emit();
    }
  }
}