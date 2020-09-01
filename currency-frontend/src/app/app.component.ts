import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'currency-frontend';
  currencyList: any;
  currencyFrom:any = '';
  currencyTo:any = '';
  fromCurrency: any;
  toCurrency: any;
  constructor(private appService: AppService) {

  }
  ngOnInit(): void {
    this.appService.fetchCurrencyList().subscribe((list:any) => {
      this.currencyList = list.result[0].currencyList;
    })
  }
  refreshRates() {
    this.appService.refreshCurrencyRates().subscribe((newRates:any) => {

    })
  }
  calculateConversion(event) {
    let fromArr = this.currencyFrom.split('');
    let toArr = this.currencyTo.split('');
    let fromvalue = fromArr[fromArr.length-4]+fromArr[fromArr.length-3]+fromArr[fromArr.length-2];
    let toValue = toArr[toArr.length-4]+toArr[toArr.length-3]+toArr[toArr.length-2];
    let body = {
      from: fromvalue,
      to: toValue,
      amount: event.target.value
    }
    this.appService.convert(body).subscribe((data:any) => {
      this.toCurrency = data.result;
    });
  }
}
