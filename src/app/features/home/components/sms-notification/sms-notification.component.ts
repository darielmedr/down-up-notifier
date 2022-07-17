import { Component } from '@angular/core';

@Component({
  selector: 'app-sms-notification',
  templateUrl: './sms-notification.component.html',
  styleUrls: ['./sms-notification.component.scss'],
})
export class SmsNotificationComponent {
  public notifications: unknown[] = new Array(4);

  constructor() {}

  public notificationsTrackBy(index: number, notification: unknown): number {
    return index;
  }
}
