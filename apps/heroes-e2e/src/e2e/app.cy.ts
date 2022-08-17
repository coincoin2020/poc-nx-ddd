import { Hero } from '@app/heroes/domain';
import {
  getAppName,
  getHeroesListItem,
  getLinkToHome,
  getTitle,
} from '../support/app.po';

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

  context('page heroes/2', () => {
    beforeEach(() => cy.visit('heroes/2'));

    it('should display title', () => {
      cy.fixture('heroes').then((heroes: Hero[]) => {
        getTitle().contains('heroes-detail');
      });
    });

    it('should display hero data', () => {
      cy.fixture('hero-2').then((hero: Hero) => {
        cy.contains(hero.name);
      });
    });

    it('shoud have link to home', () => {
      getLinkToHome().contains('Return to the home page');
    });
  });

  context('page 404', () => {
    beforeEach(() => cy.visit('non-existent-page'));

    it('should display title', () => {
      getTitle().contains('Error 404');
    });

    it('should display details', () => {
      cy.contains('Page not found.');
    });

    it('shoud have link to home', () => {
      getLinkToHome().contains('Return to the home page');
    });
  });
});
