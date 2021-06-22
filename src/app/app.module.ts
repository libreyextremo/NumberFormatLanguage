import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
//  Activate only the one that is going to be used
// import localeAr from '@angular/common/locales/ar';
// import localeBg from '@angular/common/locales/bg';
// import localeDe from '@angular/common/locales/de';
import localeEn from '@angular/common/locales/en';
// import localeEs from '@angular/common/locales/es';
// import localeFr from '@angular/common/locales/fr';
// import localeLt from '@angular/common/locales/lt';
// import localeNb from '@angular/common/locales/nb';
// import localePt from '@angular/common/locales/pt';
// import localeSv from '@angular/common/locales/sv';

registerLocaleData(localeEn);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
