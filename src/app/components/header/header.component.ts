import { Component, Input, Output, EventEmitter } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() selectedTeam = '';
  @Output() teamChange = new EventEmitter<string>();

  isNotificationOpen = false;
  notifications = [
    {
      id: uuidv4(),
      title: 'New Employee Added',
      message: 'Sarah Johnson has joined the Product Team',
      time: '2 mins ago'
    },
    {
      id: uuidv4(),
      title: 'Team Update',
      message: 'Monthly team meeting scheduled for tomorrow at 10 AM',
      time: '1 hour ago'
    },
    {
      id: uuidv4(),
      title: 'System Update',
      message: 'Employee management system will be under maintenance tonight',
      time: '3 hours ago'
    }
  ];

  toggleNotifications(event: MouseEvent): void {
    event.stopPropagation();
    this.isNotificationOpen = !this.isNotificationOpen;
  }
}