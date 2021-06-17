import { Component, OnInit } from '@angular/core';

import { LOCALE_ID, Inject } from '@angular/core';

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
    this.setCurrencyCode();
  }

  /**
   * Remove currency symbols from value to avoid  to get NaN.
   * @param value textfield value ($34,44)
   * @return textfield value without currency symbol (34,44)
   */
  currencyInputChanged(value: any): any {
    const num = value.replace(/[A-Z$€,]/g, '');
    return Number(num);
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
    console.log(lang);
    localStorage.setItem('lang', lang);
    this.localeSetting = lang;
    this.setCurrencyCode();
    window.location.reload();
  }

}
