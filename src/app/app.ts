import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCard } from './components/playing-card/playing-card';
import { Monster } from './models/monster.model';
import { SearchBar } from './components/search-bar/search-bar';

@Component({
  selector: 'app-root',
  imports: [PlayingCard, SearchBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('playing-cards');

  monster1!: Monster;
  count: number = 0;
  search = '';

  constructor() {
    this.monster1 = new Monster();
    this.monster1.name = "C3PO";
    this.monster1.hp = 40;
    this.monster1.figureCaption = "N°003 Jedi";
    this.monster1.attackName = "Cyber Force Pulse";
    this.monster1.attackStrength = 80;
    this.monster1.attackDescription = "C‑3PO unleashes his Cyber Force Pulse, proving even the galaxy’s most polite droid can pack a shock.";
  }

  increaseCount() {
    this.count++
  }
}
