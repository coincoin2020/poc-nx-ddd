import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesFeatureSearchModule } from '@app/heroes/feature-search';
import { HttpClientModule } from '@angular/common/http';
import { HeroesFeatureDetailModule } from '@app/heroes/feature-detail';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HeroesFeatureSearchModule,
    HttpClientModule,
    HeroesFeatureDetailModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
