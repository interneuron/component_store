import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {GalleryComponent} from './gallery/gallery.component';
import {CurrencyComponent} from './currency/currency.component';

import {NgxGalleryModule} from "ngx-gallery/lib/ngx-gallery.module";


@NgModule({
    declarations: [
        AppComponent,
        GalleryComponent,
        CurrencyComponent
    ],
    imports: [
        BrowserModule,
        NgxGalleryModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
