import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PhoneMaskDirective } from './phone-mask.directive';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CountryCode } from '../models/country-code.model';

@Component({
  selector: 'app-host-mock',
  template: ` <input appPhoneMask [(ngModel)]="phoneNumber" /> `,
})
class HostMockComponent {
  public phoneNumber: string = '';
}

describe('PhoneMaskDirective', () => {
  let fixture: ComponentFixture<HostMockComponent>;
  let hostElement: DebugElement;
  let directive: PhoneMaskDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostMockComponent, PhoneMaskDirective],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostMockComponent);

    hostElement = fixture.debugElement.query(By.directive(PhoneMaskDirective));
    directive = hostElement.injector.get(PhoneMaskDirective);

    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should format phone number by country code when typing input data', fakeAsync(() => {
    const phoneNumberInputElement: HTMLInputElement = hostElement.nativeElement;

    const countryCode: CountryCode = 'ES';
    directive.countryCode = countryCode;

    const mockPhoneNumberES = '666666666';
    const expectedValue = '666 66 66 66';

    phoneNumberInputElement.value = mockPhoneNumberES;

    phoneNumberInputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick();

    const result = phoneNumberInputElement.value;

    expect(result).toBe(expectedValue);
  }));
});
