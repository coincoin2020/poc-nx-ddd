import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesDomainModule } from '@app/heroes/domain';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [CommonModule, HeroesDomainModule],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class HeroesFeatureSearchModule {}
