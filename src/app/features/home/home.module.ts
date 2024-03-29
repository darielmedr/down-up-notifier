import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PhoneTemplateComponent } from './components/phone-template/phone-template.component';
import { SmsNotificationComponent } from './components/sms-notification/sms-notification.component';
import { AutoTypingComponent } from './components/auto-typing/auto-typing.component';

@NgModule({
  declarations: [
    AutoTypingComponent,
    HomeComponent,
    PhoneTemplateComponent,
    SmsNotificationComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
