export enum MonsterType {
    JEDI = "JEDI",
    SHOOTER = "SHOOTER",
    CYBORG = "CYBORG",
    EMPIRE = "EMPIRE",
}


export interface IMonsterProperties {
    imageURL: string;
    color: string;
}

export const MonsterTypeProperties: {[key: string]: IMonsterProperties} = {
    [MonsterType.JEDI]: {
        imageURL: 'img-cards/swlogo2.png',
        color: 'rgba(163, 218, 243, 0.64)'
    },
    [MonsterType.SHOOTER]: {
        imageURL: 'img-cards/SHOOTER.png',
        color: 'rgb(255, 255, 255)'
    },
    [MonsterType.CYBORG]: {
        imageURL: 'img-cards/CYBORG.png',
        color: 'rgb(100, 133, 125)'
    },
    [MonsterType.EMPIRE]: {
        imageURL: 'img-cards/EMPIRE.png',
        color: 'rgba(219, 54, 54, 0.7)'
    },
}