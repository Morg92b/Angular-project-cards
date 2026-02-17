import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCard } from './components/playing-card/playing-card';

@Component({
  selector: 'app-root',
  imports: [PlayingCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('playing-cards');
}
