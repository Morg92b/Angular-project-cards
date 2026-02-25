import { Component, computed, effect, model, signal } from '@angular/core';
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

  monsters!: Monster[];
  search = model('');

  filteredMonsters = computed(() => {
    return this.monsters.filter(monster => monster.name.includes(this.search()));
  });

  constructor() {

    this.monsters = [];


    const monster1 = new Monster();
    monster1.name = "Master-C3PO";
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

    const monster4 = new Monster();
    monster4.name = "R2-D2";
    monster4.image = "img-cards/R2-D2.webp";
    monster4.type = MonsterType.CYBORG;
    monster4.hp = 80;
    monster4.figureCaption = "N°001 Cyborg";
    monster4.attackName = "Shockwave Blast";
    monster4.attackStrength = 70;
    monster4.attackDescription = "R2-D2 unleashes a powerful shockwave blast.";
    this.monsters.push(monster4);

    const monster5 = new Monster();
    monster5.name = "Dark-Maul";
    monster5.image = "img-cards/Dark-Maul.jpg";
    monster5.type = MonsterType.EMPIRE;
    monster5.hp = 50;
    monster5.figureCaption = "N°002 Empire";
    monster5.attackName = "Sith Slash";
    monster5.attackStrength = 75;
    monster5.attackDescription = "Dark-Maul strikes with the power of the dark side.";
    this.monsters.push(monster5);
  }

}
