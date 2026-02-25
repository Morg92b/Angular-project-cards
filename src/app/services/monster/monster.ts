import { Injectable } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { MonsterType } from '../../utils/monster.utils';

@Injectable({
  providedIn: 'root',
})
export class MonsterService {

  monsters: Monster[] = []
  currentIndex: number = 1;

  constructor() {
    this.load();
  }

  private save() {
    localStorage.setItem('monsters', JSON.stringify(this.monsters));
  }

  private load() {
    const monsterData = localStorage.getItem('monsters');
    if (monsterData) {
      this.monsters = JSON.parse(monsterData).map((monsterJSON: any) => Object.assign(new Monster(), monsterJSON));
      this.currentIndex = Math.max(...this.monsters.map(monster => monster.id));
    } else {
      this.init();
      this.save();
    }
  }
  private init() {

    this.monsters = [];
    
    const monster1 = new Monster();
    monster1.id = this.currentIndex++;
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
    monster2.id = this.currentIndex++;
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
    monster3.id = this.currentIndex++;
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
    monster4.id = this.currentIndex++;
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
    monster5.id = this.currentIndex++;
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

  getAll(): Monster[] {
    return this.monsters.map(monster => monster.copy());
  }

  get(id: number): Monster | undefined {
    const monster = this.monsters.find(monster => monster.id === id);
    return monster ? monster.copy() : undefined;
  }

  add(monster: Monster): Monster {
    const monsterCopy = monster.copy();

    monsterCopy.id = this.currentIndex;
    this.monsters.push(monsterCopy.copy());
    this.currentIndex++;
    this.save();
    return monsterCopy;
  }

  update(monster: Monster): Monster {
    const monsterCopy = monster.copy();

    const monsterIndex = this.monsters.findIndex(originalMonster => originalMonster.id === monster.id);
    if (monsterIndex != -1) {
      this.monsters[monsterIndex] = monsterCopy.copy();
      this.save();
    }
    return monsterCopy;
  }

  delete(id: number) {

    const monsterIndex = this.monsters.findIndex(originalMonster => originalMonster.id === id);
    if (monsterIndex != -1) {
      this.monsters.splice(monsterIndex, 1);
      this.save();
    }
  }
}
