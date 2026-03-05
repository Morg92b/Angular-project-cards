import { Router } from '@angular/router';
import { Component, computed, inject, model, signal } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { SearchBar } from '../../components/search-bar/search-bar';
import { PlayingCard } from '../../components/playing-card/playing-card';
import { CommonModule } from '@angular/common';
import { MonsterService } from '../../services/monster/monster';

@Component({
  selector: 'app-monster-list',
  imports: [SearchBar, PlayingCard, CommonModule],
  templateUrl: './monster-list.html',
  styleUrl: './monster-list.css',
})
export class MonsterList {
  protected readonly title = signal('playing-cards');

  private MonsterService = inject(MonsterService);
  monsters = signal<Monster[]>([]);
  search = model('');
  private router = inject(Router);

  filteredMonsters = computed(() => {
    return this.monsters().filter(monster => monster.name.includes(this.search()));
  });

  constructor() {
    this.monsters.set(this.MonsterService.getAll());
  }

  addMonster() {
    this.router.navigate(['/monster']);
  }

  openMonster(monster: Monster) {
    this.router.navigate(['/monster', monster.id]);
  }


}
