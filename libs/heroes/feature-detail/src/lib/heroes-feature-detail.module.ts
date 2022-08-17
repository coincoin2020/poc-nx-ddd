import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesDomainModule } from '@app/heroes/domain';
import { DetailComponent } from './detail.component';

@NgModule({
  imports: [CommonModule, HeroesDomainModule],
  declarations: [DetailComponent],
  exports: [DetailComponent],
})
export class HeroesFeatureDetailModule {}
