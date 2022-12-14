import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Dr. Strange' },
      { id: 2, name: 'Ironman' },
      { id: 3, name: 'hulk' },
      { id: 4, name: 'Thor' },
      { id: 5, name: 'Spiderman' },
      { id: 6, name: 'Starlord' },
      { id: 7, name: 'captain' },
      { id: 8, name: 'Black Panther' },
      { id: 9, name: 'Antman' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}