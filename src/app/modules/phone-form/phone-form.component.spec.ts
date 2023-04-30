import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents, MockProviders } from 'ng-mocks';
import { PhoneCountrySelectorComponent } from './components/phone-country-selector/phone-country-selector.component';
import { PhoneInputComponent } from './components/phone-input/phone-input.component';

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
