import { Component, OnInit } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar';
import localeBg from '@angular/common/locales/bg';
import localeDe from '@angular/common/locales/de';
import localeEn from '@angular/common/locales/en';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import localeLt from '@angular/common/locales/lt';
import localeNb from '@angular/common/locales/nb';
import localePt from '@angular/common/locales/pt';
import localeSv from '@angular/common/locales/sv';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  localeSetting = 'en-EN';
  currencyCodeSetting = 'USD';
  lang: string;
  numberVal = 1234567890.123456;
  price = 9876543210.987654;

  /**
   * Constructor.
   */
  constructor() {
    this.localeSetting = localStorage.getItem('lang') || 'en-US';
    this.setRegisterLocaleData();
    this.setCurrencyCode();
  }

  /**
   * Remove currency symbols from value to avoid  to get NaN.
   * @param value textfield value ($34,44)
   * @return textfield value without currency symbol (34,44)
   */
  currencyInputChanged(value: any): any {
    let num;
    switch (this.localeSetting) {
      case 'ar-MA':
        // 9,876,543,210.99 د.م => 9876543210.99
        num = value.replace(/[€\s,]/g, ''); // \s => replace white spaces
        num = num.replace(/[د.م]/g, ''); // currency symbol
        return Number(num);
      case 'bg-BG':
        // 9876543210,99 € => 9876543210.99
        num = value.replace(/[€\s]/g, ''); // \s => replace white spaces
        num = num.replace(/,/g, '.'); // replace , for .
        return Number(num);
      case 'de-DE':
        // 9.876.543.210,99 € => 9876543210.99
        num = value.replace(/[€\s.]/g, ''); // \s => replace white spaces
        num = num.replace(/,/g, '.'); // replace , for .
        return Number(num);
      case 'en-US':
        // $9,876,543,210.99 => 9876543210.99
        num = value.replace(/[$€,]/g, '');
        return Number(num);
      case 'es-CO':
        // 9.876.543.210,99 COP => 9876543210.99
        num = value.replace(/[A-Z\s.]/g, ''); // \s => replace white spaces
        num = num.replace(/,/g, '.'); // replace , for .
        return Number(num);
      case 'es-ES':
        // 9.876.543.210,99 € => 9876543210.99
        num = value.replace(/[€\s.]/g, ''); // \s => replace white spaces
        num = num.replace(/,/g, '.'); // replace , for .
        return Number(num);
      case 'fr-FR':
        // 9 876 543 210,99 € => 9876543210.99
        num = value.replace(/[€\s]/g, '');
        num = num.replace(/,/g, '.'); // replace , for .
        return Number(num);
      case 'lt-LT':
        // 9 876 543 210,99 € => 9876543210.99
        num = value.replace(/[€\s]/g, '');
        num = num.replace(/,/g, '.'); // replace , for .
        return Number(num);
      case 'nb-NO':
        // kr 9 876 543 210,99 => 9876543210.99
        num = value.replace(/[a-zA-Z\s]/g, '');
        num = num.replace(/,/g, '.'); // replace , for .
        return Number(num);
      case 'pt-PT':
        // € 9.876.543.210,99 => 9876543210.99
        num = value.replace(/[€\s.]/g, '');
        num = num.replace(/,/g, '.'); // replace , for .
        return Number(num);
      case 'sv-SE':
        // 9 876 543 210,99 kr => 9876543210.99
        num = value.replace(/[a-zA-Z$€,]/g, '');
        num = num.replace(/,/g, '.'); // replace , for .
        return Number(num);
      default:
        // Display error message because in other case, database will receive a wrong value
        alert('ERROR: this currency format is not supported');
    }
  }

  /**
   * Set locale culture
   */
  setRegisterLocaleData(): void {
    switch (this.localeSetting) {
      case 'ar-MA':
        registerLocaleData(localeAr);
        break;
      case 'bg-BG':
        registerLocaleData(localeBg);
        break;
      case 'de-DE':
        registerLocaleData(localeDe);
        break;
      case 'en-US':
        registerLocaleData(localeEn);
        break;
      case 'es-CO':
        registerLocaleData(localeEs);
        break;
      case 'es-ES':
        registerLocaleData(localeEs);
        break;
      case 'fr-FR':
        registerLocaleData(localeFr);
        break;
      case 'lt-LT':
        registerLocaleData(localeLt);
        break;
      case 'nb-NO':
        registerLocaleData(localeNb);
        break;
      case 'pt-PT':
        registerLocaleData(localePt);
        break;
      case 'sv-SE':
        registerLocaleData(localeSv);
        break;
      default:
        registerLocaleData(localeEn);
        break;
    }
  }

  /**
   * Set currency code depending on language selected.
   */
  setCurrencyCode(): void {
    switch (this.localeSetting) {
      case 'ar-MA':
        this.currencyCodeSetting = 'MAD'; // Dirham marroqui
        break;
      case 'bg-BG':
        this.currencyCodeSetting = 'EUR'; // Euro
        break;
      case 'de-DE':
        this.currencyCodeSetting = 'EUR'; // Euro
        break;
      case 'en-US':
        this.currencyCodeSetting = 'USD'; // Dollar
        break;
      case 'es-CO':
        this.currencyCodeSetting = 'COP'; // Peso colombiano
        break;
      case 'es-ES':
        this.currencyCodeSetting = 'EUR'; // Euro
        break;
      case 'fr-FR':
        this.currencyCodeSetting = 'EUR'; // Euro
        break;
      case 'lt-LT':
        this.currencyCodeSetting = 'EUR'; // Euro
        break;
      case 'nb-NO':
        this.currencyCodeSetting = 'NOK'; // Corona noruega
        break;
      case 'pt-PT':
        this.currencyCodeSetting = 'EUR'; // Euro
        break;
      case 'sv-SE':
        this.currencyCodeSetting = 'SEK'; // Corona sueca
        break;
      default:
        this.currencyCodeSetting = 'USD';
        break;
    }
  }

  ngOnInit(): void {}

  /**
   * Change language.
   * @param lang language selected (es-ES).
   */
  changeLang(lang): void{
    localStorage.setItem('lang', lang);
    this.localeSetting = lang;
    this.setRegisterLocaleData();
    this.setCurrencyCode();
    window.location.reload();
  }

}
