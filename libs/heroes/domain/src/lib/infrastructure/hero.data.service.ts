import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Hero } from '../entities/hero';
const HEROES: Hero[] = [
  {
    id: 1,
    name: 'Raya',
    level: 4,
    description: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 2,
    name: 'Kimba',
    level: 3,
    description: 'At vero eos et accusam et justo duo dolores',
  },
  {
    id: 3,
    name: 'Toto',
    level: 3,
    description: 'Duis autem vel eum iriure dolor in hendrerit',
  },
];

@Injectable({ providedIn: 'root' })
export class HeroDataService {
  constructor(private http: HttpClient) {}

  load(): Observable<Hero[]> {
    // Uncomment if needed
    /*
        const url = '...';
        const params = new HttpParams().set('param', 'value');
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Hero[]>(url, {params, headers});
        */

    return of(HEROES);
  }

  find(id: number): Observable<Hero | undefined> {
    return of(HEROES.find((h: Hero) => h.id === id));
  }
}
