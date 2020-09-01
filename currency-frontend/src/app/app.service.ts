import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { switchMap, debounceTime } from 'rxjs/operators';
import { from } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor(private http: HttpClient) {

    }
    fetchCurrencyList() {
       return this.http.get('http://localhost:5000/currencies');
    }
    refreshCurrencyRates() {
        return this.http.get('http://localhost:5000/refresh-rates');
    }
    convert(body) {
        return this.http.post('http://localhost:5000/convert', body);
    }
}