import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Hero } from '../entities/hero';
import { HeroDataService } from '../infrastructure/hero.data.service';

@Injectable({ providedIn: 'root' })
export class SearchFacade {
  private heroListSubject = new BehaviorSubject<Hero[]>([]);
  heroList$ = this.heroListSubject.asObservable();

  constructor(private heroDataService: HeroDataService) {}

  load(): void {
    this.heroDataService.load().subscribe({
      next: (heroList) => {
        this.heroListSubject.next(heroList);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
