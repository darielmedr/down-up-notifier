import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import {
  MockComponents,
  MockDirectives,
  MockModule,
  MockProviders,
} from 'ng-mocks';
import { PhoneCountrySelectorComponent } from './components/phone-country-selector/phone-country-selector.component';
import { PhoneInputComponent } from './components/phone-input/phone-input.component';
import { PhoneMaskDirective } from './directives/phone-mask.directive';

import { PhoneFormComponent } from './phone-form.component';
import { PhoneCodePrefixPipe } from './pipes/phone-code-prefix.pipe';

describe('PhoneFormComponent', () => {
  let component: PhoneFormComponent;
  let fixture: ComponentFixture<PhoneFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PhoneFormComponent,
        ...MockComponents(PhoneCountrySelectorComponent, PhoneInputComponent),
      ],
      providers: [...MockProviders(PhoneCodePrefixPipe)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
