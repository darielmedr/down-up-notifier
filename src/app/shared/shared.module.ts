import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material/material.module';
import { PhoneMaskDirective } from './directives/phone-mask.directive';
import { CountryFlagSelectorComponent } from './country-flag-selector/country-flag-selector.component';
import { FlagPipe } from './pipes/flag.pipe';
import { FlagEmojiPipe } from './pipes/flag-emoji.pipe';

const components: any[] = [
  CountryFlagSelectorComponent
];

const directives: any[] = [
  PhoneMaskDirective
];

const pipes: any[] = [
  FlagPipe,
  FlagEmojiPipe,
];

const modules: any[] = [
  MaterialModule
];

@NgModule({
  declarations: [
    ...components,
    ...directives,
    ...pipes
  ],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [
    ...components,
    ...directives,
    ...pipes,
    ...modules
  ]
})
export class SharedModule { }
