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
        color: '#E0F7FA'
    },
    [MonsterType.SHOOTER]: {
        imageURL: 'img-cards/SHOOTER.png',
        color: 'rgba(219, 54, 54, 0.3)'
    },
    [MonsterType.CYBORG]: {
        imageURL: 'img-cards/CYBORG.png',
        color: 'rgba(96, 125, 139, 0.9)'
    },
    [MonsterType.EMPIRE]: {
        imageURL: 'img-cards/EMPIRE.png',
        color: 'rgba(33, 33, 33, 0.95)'
    },
}