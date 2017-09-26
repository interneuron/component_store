import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-currency',
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.less']
})
export class CurrencyComponent implements OnInit {
    data:any = [];
    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.http.get('https://www.cbr-xml-daily.ru/daily_json.js').subscribe(data => {
            console.dir(this.data = data);
        });

        console.log(this.data)
        this.data.forEach(item => console.log(item));

    }

}
