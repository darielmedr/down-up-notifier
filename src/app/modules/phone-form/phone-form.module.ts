import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneFormComponent } from './phone-form.component';
import { FlagEmojiPipe } from './pipes/flag-emoji.pipe';
import { MatSelectModule } from '@angular/material/select';
import { PhoneMaskDirective } from './directives/phone-mask.directive';
import { PhoneCodePrefixPipe } from './pipes/phone-code-prefix.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { PhoneInputComponent } from './components/phone-input/phone-input.component';
import { PhoneCountrySelectorComponent } from './components/phone-country-selector/phone-country-selector.component';
import { FormsModule } from '@angular/forms';

const material: any[] = [MatSelectModule, MatIconModule, MatInputModule];

@NgModule({
  declarations: [
    FlagEmojiPipe,
    PhoneCodePrefixPipe,
    PhoneCountrySelectorComponent,
    PhoneFormComponent,
    PhoneInputComponent,
    PhoneMaskDirective,
  ],
  providers: [PhoneCodePrefixPipe],
  imports: [CommonModule, ...material, FormsModule],
  exports: [PhoneFormComponent],
})
export class PhoneFormModule {}
