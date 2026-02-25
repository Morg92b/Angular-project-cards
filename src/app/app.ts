import { MonsterService } from './services/monster/monster';
import { Component, computed, effect, inject, model, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCard } from './components/playing-card/playing-card';
import { Monster } from './models/monster.model';
import { SearchBar } from './components/search-bar/search-bar';
import { MonsterType } from './utils/monster.utils';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [PlayingCard, SearchBar, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('playing-cards');

  MonsterService = inject(MonsterService);
  monsters = signal<Monster[]>([]);
  search = model('');

  filteredMonsters = computed(() => {
    return this.monsters().filter(monster => monster.name.includes(this.search()));
  });

  constructor() {
    this.monsters.set(this.MonsterService.getAll());
  }

  addMonster() {
    const genericMonster = new Monster();
    this.MonsterService.add(genericMonster);
    this.monsters.set(this.MonsterService.getAll());
  }

}
