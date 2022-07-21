import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';
import { AutoTypingComponent } from './components/auto-typing/auto-typing.component';
import { PhoneTemplateComponent } from './components/phone-template/phone-template.component';
import { SmsNotificationComponent } from './components/sms-notification/sms-notification.component';

import { HomeComponent } from './home.component';

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        ...MockComponents(
          AutoTypingComponent,
          PhoneTemplateComponent,
          SmsNotificationComponent,
        ),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
