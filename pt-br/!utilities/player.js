import PromptSync from 'prompt-sync';
import chalk from 'chalk';

const prompt = PromptSync();

export class Player {
    #hp;
    #atk;
    #per;
    #class;
    constructor(hp, atk, per, name) {
        this.#hp = hp;
        this.#atk = atk;
        this.#per = per;
        this.#class = name;
    }

    get hp() {
        return this.#hp;
    }

    get atk() {
        return this.#atk;
    }

    get per() {
        return this.#per;
    }

    get class() {
        return this.#class;
    }

    setStats(n) {
        if (n == 1) { //Warrior
            this.#class = 'Guerreiro'
            this.#hp = 10.0;
            this.#atk = 2.5;
            this.#per = 1.0;
        } else if (n == 2) { //Mage
            this.#class = 'Mago'
            this.#hp = 7.0;
            this.#atk = 1.5;
            this.#per = 4.0;
        } else if (n == 3) { //Ranger
            this.#class = 'Arqueiro'
            this.#hp = 7.5;
            this.#atk = 2.0;
            this.#per = 2.0;
        } else if (n == 4) { //Paladin
            this.#class = 'Paladino'
            this.#hp = 15.0;
            this.#atk = 3.0;
            this.#per = 0.0;
        } else {
            return false;
        }
    }

    heal(regen, maxLife) {
        let lifeExt = player.#hp;
        this.#hp += regen;

        if (this.#hp > maxLife) {
            this.#hp = maxLife;
        }

        let extra = this.#hp - lifeExt;
        return extra;
    }

    lifedmg(dmg) {
        this.#hp -= dmg;
    }

    getLifePerClass(className) {
        switch (className.toLowerCase()) {
            case 'guerreiro': return 10.0;
            case 'mago': return 7.0;
            case 'arqueiro': return 7.5;
            case 'paladino': return 15.0;
        }
    }
}

export const player = new Player();

export function characterSelect() {
    let n;
    console.log(chalk.italic("1 - Guerreiro     |"));
    console.log(chalk.italic("2 - Mago          |"));
    console.log(chalk.italic("3 - Arqueiro      |"));
    console.log(chalk.italic("4 - Paladino      |"));
    console.log("------------------");
    n = Number(prompt("Selecione um personagem: "));
 
    while (![1, 2, 3, 4].includes(n)) {
        n = Number(prompt(chalk.red.bold("ERROR, select a character: ")));
    }

    console.clear();
    if (n == 1) {
        console.log(chalk.yellow.italic("1 - Guerreiro   < |"));
        console.log(chalk.italic("2 - Mago          |"));
        console.log(chalk.italic("3 - Arqueiro      |"));
        console.log(chalk.italic("4 - Paladino      |"));
        console.log("------------------");
        player.setStats(1);
        prompt();
        console.clear();
    } else if (n == 2) {
        console.log(chalk.italic("1 - Guerreiro     |"));
        console.log(chalk.yellow.italic("2 - Mago        < |"));
        console.log(chalk.italic("3 - Arqueiro      |"));
        console.log(chalk.italic("4 - Paladino      |"));
        console.log("------------------");
        player.setStats(2);
        prompt();
        console.clear();
    } else if (n == 3) {
        console.log(chalk.italic("1 - Guerreiro     |"));
        console.log(chalk.italic("2 - Mago          |"));
        console.log(chalk.yellow.italic("3 - Arqueiro    < |"));
        console.log(chalk.italic("4 - Paladino      |"));
        console.log("------------------");
        player.setStats(3);
        prompt();
        console.clear();
    } else if (n == 4) {
        console.log(chalk.italic("1 - Guerreiro     |"))
        console.log(chalk.italic("2 - Mago          |"))
        console.log(chalk.italic("3 - Arqueiro      |"))
        console.log(chalk.yellow.italic("4 - Paladino    < |"))
        console.log("------------------");
        player.setStats(4);
        prompt();
        console.clear();
    }
}