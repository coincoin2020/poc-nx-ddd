import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesFeatureDetailModule } from '@app/heroes/feature-detail';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';

@NgModule({
  declarations: [DetailsComponent],
  imports: [CommonModule, DetailsRoutingModule, HeroesFeatureDetailModule],
})
export class DetailsModule {}
