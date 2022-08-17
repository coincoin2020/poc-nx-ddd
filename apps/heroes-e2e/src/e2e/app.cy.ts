import { Hero } from '@app/heroes/domain';
import { getAppName, getHeroesListItem, getTitle } from '../support/app.po';

describe('heroes', () => {
  beforeEach(() => cy.visit('/'));

  it('should display app name', () => {
    getAppName().contains('heroes');
  });

  it('should display title', () => {
    getTitle().contains('heroes-search');
  });

  it('should display heroes', () => {
    cy.fixture('heroes').then((heroes: Hero[]) => {
      getHeroesListItem().should((i) => expect(i.length).eq(heroes.length));

      heroes.map((hero: Hero, index: number) => {
        getHeroesListItem().eq(index).contains(hero.name);
      });
    });
  });
});
