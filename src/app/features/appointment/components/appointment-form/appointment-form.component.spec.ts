import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MockComponents, MockDirectives, MockModule } from 'ng-mocks';
import { CountryFlagSelectorComponent } from 'src/app/shared/country-flag-selector/country-flag-selector.component';
import { PhoneMaskDirective } from 'src/app/shared/directives/phone-mask.directive';

import { AppointmentFormComponent } from './appointment-form.component';

describe('AppointmentFormComponent', () => {
  let component: AppointmentFormComponent;
  let fixture: ComponentFixture<AppointmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppointmentFormComponent,
        ...MockDirectives(PhoneMaskDirective),
        ...MockComponents(CountryFlagSelectorComponent),
      ],
      imports: [
        ReactiveFormsModule,
        MockModule(MatFormFieldModule),
        MockModule(MatDatepickerModule),
        MockModule(MatSelectModule),
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
