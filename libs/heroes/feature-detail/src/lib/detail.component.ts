import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailFacade } from '@app/heroes/domain';

@Component({
  selector: 'heroes-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() id = 0;
  heroDetail$ = this.detailFacade.heroDetail$;

  constructor(
    private detailFacade: DetailFacade,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.find(this.id);
  }

  find(id: number): void {
    this.detailFacade.find(id);
  }
}
