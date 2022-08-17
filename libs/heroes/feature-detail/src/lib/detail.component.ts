import { Component, OnInit } from '@angular/core';
import { DetailFacade } from '@app/heroes/domain';

@Component({
  selector: 'heroes-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  constructor(private detailFacade: DetailFacade) {}

  ngOnInit() {}
}
