import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { CountryCode } from '../../models/country-code.model';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneInputComponent {
  @Input()
  public countryCode: CountryCode = 'ES';

  @Output()
  public readonly phoneNumber: EventEmitter<string> = new EventEmitter();

  @Output()
  public readonly touched: EventEmitter<void> = new EventEmitter();

  public maskedPhoneNumber: string = '';

  constructor() {}

  public emitPhoneNumber(): void {
    this.phoneNumber.emit(this.maskedPhoneNumber);
  }

  public emitTouched(): void {
    this.touched.emit();
  }
}
