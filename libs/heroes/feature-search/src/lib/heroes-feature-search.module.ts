import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesDomainModule } from '@app/heroes/domain';
import { SearchComponent } from './search.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, HeroesDomainModule, RouterModule.forChild([])],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class HeroesFeatureSearchModule {}
