import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MockDirectives, MockModule } from 'ng-mocks';
import { PhoneMaskDirective } from 'src/app/modules/phone-form/directives/phone-mask.directive';
import { PhoneFormModule } from 'src/app/modules/phone-form/phone-form.module';

import { AppointmentFormComponent } from './appointment-form.component';

describe('AppointmentFormComponent', () => {
  let component: AppointmentFormComponent;
  let fixture: ComponentFixture<AppointmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppointmentFormComponent,
        ...MockDirectives(PhoneMaskDirective),
      ],
      imports: [
        ReactiveFormsModule,
        MockModule(MatFormFieldModule),
        MockModule(MatDatepickerModule),
        MockModule(MatSelectModule),
        MockModule(PhoneFormModule),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
