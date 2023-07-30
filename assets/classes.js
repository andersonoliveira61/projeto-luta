class character {

    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name;
    }

    get life() {
        return this._life;
    }
    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;

    }
}

class guerreiro extends character {
    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

class mago extends character {
    constructor(name) {
        super(name);
        this.life = 80;
        this.attack = 18;
        this.defense = 3;
        this.maxLife = this.life;
    }
}

class LittleMonster extends character {
    constructor() {
        super('Little Monster');
        this.life = 50 ;
        this.attack = 4;
        this.defense = 4;
        this.maxLife = this.life;
    }
}

class BigMonster extends character {
    constructor() {
        super('Big Monster');
        this.life = 120;
        this.attack = 15;
        this.defense = 2;
        this.maxLife = this.life;
    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
    }

    start() {
        this.update();

        this.fighter1El.querySelector(`.attackbutton`).addEventListener(`click`, () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2El.querySelector(`.attackbutton`).addEventListener(`click`, () => this.doAttack(this.fighter2, this.fighter1));
    }

    update() {
        //lutador 1
        this.fighter1El.querySelector(`.name`).innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} XP`;
        let f1pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector(`.lifebar .bar`).style.width=`${f1pct}%`

        //lutador2
        this.fighter2El.querySelector(`.name`).innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} XP`;
        let f2pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector(`.lifebar .bar`).style.width = `${f2pct}%`
    }

    doAttack(attacking, attacked) {
        if (attacking.life <= 0 || attacked.life <= 0) {
            console.log('Jogador Morto');
            return;
        }

        let attackFactor = (Math.random() * 2).toFixed(2);
        let defenseFactor = (Math.random() * 2).toFixed(2);

        let actualAttack = attacking.attack * attackFactor;
        let actualDefense = attacked.defense * defenseFactor;

        if (actualAttack > actualDefense) {
            attacked.life -= actualAttack;
            console.log(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`)
        } else {
            console.log(`${attacked.name} conseguiu defender`)
        }

        this.update();

    }

   

}