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
            this.#class = 'Warrior'
            this.#hp = 10.0;
            this.#atk = 2.5;
            this.#per = 1.0;
        } else if (n == 2) { //Mage
            this.#class = 'Mage'
            this.#hp = 7.0;
            this.#atk = 1.5;
            this.#per = 4.0;
        } else if (n == 3) { //Ranger
            this.#class = 'Ranger'
            this.#hp = 7.5;
<<<<<<< HEAD
            this.#atk = 1.7;
=======
            this.#atk = 2.0;
>>>>>>> 14a6a01 (grivar 1.1.1)
            this.#per = 2.0;
        } else if (n == 4) { //Paladin
            this.#class = 'Paladin'
            this.#hp = 15.0;
<<<<<<< HEAD
            this.#atk = 2.0;
=======
            this.#atk = 3.0;
>>>>>>> 14a6a01 (grivar 1.1.1)
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
            case 'warrior': return 10.0;
            case 'mage': return 7.0;
            case 'ranger': return 7.5;
            case 'paladin': return 15.0;
        }
    }
}

export const player = new Player();
<<<<<<< HEAD
=======
player.setStats(2);
>>>>>>> 14a6a01 (grivar 1.1.1)

export function characterSelect() {
    let n;
    console.log(chalk.italic("1 - Warrior      |"));
    console.log(chalk.italic("2 - Mage         |"));
    console.log(chalk.italic("3 - Ranger       |"));
    console.log(chalk.italic("4 - Paladin      |"));
    console.log("------------------");
    n = Number(prompt("Select a character: "));

    while (n < 1 || n > 4) {
        n = Number(prompt(chalk.red.bold("ERROR, select a character: ")));
    }

    console.clear();
    if (n == 1) {
        console.log(chalk.yellow.italic("1 - Warrior    < |"));
        console.log(chalk.italic("2 - Mage         |"));
        console.log(chalk.italic("3 - Ranger       |"));
        console.log(chalk.italic("4 - Paladin      |"));
        console.log("------------------");
        player.setStats(1);
        prompt();
        console.clear();
    } else if (n == 2) {
        console.log(chalk.italic("1 - Warrior      |"));
        console.log(chalk.yellow.italic("2 - Mage       < |"));
        console.log(chalk.italic("3 - Ranger       |"));
        console.log(chalk.italic("4 - Paladin      |"));
        console.log("------------------");
        player.setStats(2);
        prompt();
        console.clear();
    } else if (n == 3) {
        console.log(chalk.italic("1 - Warrior      |"));
        console.log(chalk.italic("2 - Mage         |"));
        console.log(chalk.yellow.italic("3 - Ranger     < |"));
        console.log(chalk.italic("4 - Paladin      |"));
        console.log("------------------");
        player.setStats(3);
        prompt();
        console.clear();
    } else if (n == 4) {
        console.log(chalk.italic("1 - Warrior      |"))
        console.log(chalk.italic("2 - Mage         |"))
        console.log(chalk.italic("3 - Ranger       |"))
        console.log(chalk.yellow.italic("4 - Paladin    < |"))
        console.log("------------------");
        player.setStats(4);
        prompt();
        console.clear();
    }
}