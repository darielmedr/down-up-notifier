import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';

import localeEsCU from '@angular/common/locales/es-CU';
import { registerLocaleData } from '@angular/common';
import { NavbarModule } from './features/navbar/navbar.module';
import { MaterialConfigurationModule } from './modules/material/material-configuration.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    MaterialConfigurationModule,
    NavbarModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-CU' }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(localeEsCU);
  }
}
