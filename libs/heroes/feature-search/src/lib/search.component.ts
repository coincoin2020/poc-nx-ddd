import { Component, OnInit } from '@angular/core';
import { SearchFacade } from '@app/heroes/domain';

@Component({
  selector: 'heroes-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  heroList$ = this.searchFacade.heroList$;

  constructor(private searchFacade: SearchFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.searchFacade.load();
  }
}
