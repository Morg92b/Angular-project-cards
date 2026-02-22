import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCard } from './components/playing-card/playing-card';
import { Monster } from './models/monster.model';
import { SearchBar } from './components/search-bar/search-bar';
import { MonsterType } from './utils/monster.utils';

@Component({
  selector: 'app-root',
  imports: [PlayingCard, SearchBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('playing-cards');

  monsters!: Monster[];
  count: number = 0;
  search = '';

  selectedMonsterIndex = signal(1);
  selectedMonster = computed(() => {
    return this.monsters[this.selectedMonsterIndex()];
  })

  constructor() {

    effect(() => {
      console.log(this.selectedMonster());
    })
    this.monsters = [];


    const monster1 = new Monster();
    monster1.name = "C3PO";
    monster1.image = "img-cards/c3po.png";
    monster1.type = MonsterType.JEDI;
    monster1.hp = 40;
    monster1.figureCaption = "N°003 Jedi";
    monster1.attackName = "Cyber Force Pulse";
    monster1.attackStrength = 80;
    monster1.attackDescription = "C‑3PO unleashes his Cyber Force Pulse, proving even the galaxy’s most polite droid can pack a shock.";
    this.monsters.push(monster1);

    const monster2 = new Monster();
    monster2.name = "Master-Spidey";
    monster2.image = "img-cards/spidey.png";
    monster2.type = MonsterType.JEDI;
    monster2.hp = 90;
    monster2.figureCaption = "N°001 Jedi";
    monster2.attackName = "Web Sling";
    monster2.attackStrength = 60;
    monster2.attackDescription = "Master-Spidey swings his webbing with incredible precision and strength.";
    this.monsters.push(monster2);

    const monster3 = new Monster();
    monster3.name = "Dembe-Solo";
    monster3.image = "img-cards/DEMBE-SOLO.png";
    monster3.type = MonsterType.SHOOTER;
    monster3.hp = 30;
    monster3.figureCaption = "N°010 shooter";
    monster3.attackName = "Shadow Strike";
    monster3.attackStrength = 110;
    monster3.attackDescription = "Dembe-Solo strikes with the power of the shadows.";
    this.monsters.push(monster3);
  }

  increaseCount() {
    this.count++
  }
  toggleMonster() {
    this.selectedMonsterIndex.set((this.selectedMonsterIndex() + 1) % this.monsters.length);

  }
}
