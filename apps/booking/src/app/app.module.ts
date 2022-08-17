import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BookingFeatureSearchModule } from '@app/booking/feature-search';
import { HttpClientModule } from '@angular/common/http';
import { BookingFeatureCancelModule } from '@app/booking/feature-cancel';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    BookingFeatureSearchModule,
    HttpClientModule,
    BookingFeatureCancelModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
