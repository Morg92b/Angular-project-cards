import { MonsterType } from "../utils/monster.utils";

export class Monster {

    id: number = -1;
    name: string = "My Monster";
    image: string = "img-cards/c3po.png";
    type: MonsterType = MonsterType.JEDI;
    hp: number = 40;
    figureCaption: string = "N°001";
    attackName: string = "Cyber Force Pulse";
    attackStrength: number = 80;
    attackDescription: string = "C‑3PO unleashes his Cyber Force Pulse, proving even the galaxy’s most polite droid can pack a shock."

    copy(): Monster {
        return Object.assign(new Monster(), this);
    }
}