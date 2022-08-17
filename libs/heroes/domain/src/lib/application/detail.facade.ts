import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../entities/hero';
import { HeroDataService } from '../infrastructure/hero.data.service';

@Injectable({ providedIn: 'root' })
export class DetailFacade {
  private heroDetailSubject = new BehaviorSubject<Hero | undefined>(undefined);
  heroDetail$ = this.heroDetailSubject.asObservable();

  constructor(private heroDataService: HeroDataService) {}

  find(id: number): void {
    this.heroDataService.find(id).subscribe({
      next: (heroDetail) => {
        this.heroDetailSubject.next(heroDetail);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
