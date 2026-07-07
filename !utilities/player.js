import PromptSync from 'prompt-sync';
import chalk from 'chalk';

const prompt = PromptSync();

export class Player{
    #hp;
    #atk;
    #per;
    constructor(hp, atk, per){
        this.#hp = hp;
        this.#atk = atk;
        this.#per = per;
    }

    get hp(){
        return this.#hp;
    }
    
    get atk(){
        return this.#atk;
    }
    
    get per(){
        return this.#per;
    }

    setStats(n){
        if(n == 1){ //Warrior
            this.#hp = 10.0;
            this.#atk = 2.5;
            this.#per = 1.0;
        }else if(n == 2){ //Mage
            this.#hp = 7.0;
            this.#atk = 1.5;
            this.#per = 4.0;
        }else if(n == 3){ //Ranger
            this.#hp = 7.5;
            this.#atk = 3.0;
            this.#per = 2.0;
        }else if(n == 4){ //Paladin
            this.#hp = 15.0;
            this.#atk = 3.0;
            this.#per = 0.0;
        }else{
            return false;
        }
    }
}

export const player = new Player();
player.setStats(2);

export default function characterSelect(t){
    let n;
    if(t == 1){ //Character selection english version
        console.log(chalk.italic("1 - Warrior      |"));
        console.log(chalk.italic("2 - Mage         |"));
        console.log(chalk.italic("3 - Ranger       |"));
        console.log(chalk.italic("4 - Paladin      |"));
        console.log("------------------");
        n = Number(prompt("Select a character: "));

        while(n < 1 || n > 4){
            n = Number(prompt(chalk.red.bold("ERROR, select a character: ")));
        }

        console.clear();
        if(n == 1){
            console.log(chalk.yellow.italic("1 - Warrior    < |"));
            console.log(chalk.italic("2 - Mage         |"));
            console.log(chalk.italic("3 - Ranger       |"));
            console.log(chalk.italic("4 - Paladin      |"));
            console.log("------------------");
            player.setStats(1);
            prompt();
            console.clear();
        }else if(n == 2){
            console.log(chalk.italic("1 - Warrior      |"));
            console.log(chalk.yellow.italic("2 - Mage       < |"));
            console.log(chalk.italic("3 - Ranger       |"));
            console.log(chalk.italic("4 - Paladin      |"));
            console.log("------------------");
            player.setStats(2);
            prompt();
            console.clear();
        }else if(n == 3){
            console.log(chalk.italic("1 - Warrior      |"));
            console.log(chalk.italic("2 - Mage         |"));
            console.log(chalk.yellow.italic("3 - Ranger     < |"));
            console.log(chalk.italic("4 - Paladin      |"));
            console.log("------------------");
            player.setStats(3);
            prompt();
            console.clear();
        }else if(n == 4){
            console.log(chalk.italic("1 - Warrior      |"))
            console.log(chalk.italic("2 - Mage         |"))
            console.log(chalk.italic("3 - Ranger       |"))
            console.log(chalk.yellow.italic("4 - Paladin    < |"))
            console.log("------------------");
            player.setStats(4);
            prompt();
            console.clear();
        }
    }else{ //Character selection portuguese version
        console.log(chalk.italic("1 - Guerreiro     |"));
        console.log(chalk.italic("2 - Mago          |"));
        console.log(chalk.italic("3 - Arqueiro      |"));
        console.log(chalk.italic("4 - Paladino      |"));
        console.log("------------------");
        n = Number(prompt("Selecione um personagem: "));

        while(n < 1 || n > 4){
            n = Number(prompt(chalk.red.bold("ERRO, selecione um personagem: ")));
        }

        console.clear();
        if(n == 1){
            console.log(chalk.yellow.italic("1 - Guerreiro   < |"));
            console.log(chalk.italic("2 - Mago          |"));
            console.log(chalk.italic("3 - Arqueiro      |"));
            console.log(chalk.italic("4 - Paladino      |"));
            console.log("------------------");
            player.setStats(1);
            prompt();
            console.clear();
        }else if(n == 2){
            console.log(chalk.italic("1 - Guerreiro     |"));
            console.log(chalk.yellow.italic("2 - Mago        < |"));
            console.log(chalk.italic("3 - Arqueiro      |"));
            console.log(chalk.italic("4 - Paladino      |"));
            console.log("------------------");
            player.setStats(2);
            prompt();
            console.clear();
        }else if(n == 3){
            console.log(chalk.italic("1 - Guerreiro     |"));
            console.log(chalk.italic("2 - Mago          |"));
            console.log(chalk.yellow.italic("3 - Arqueiro    < |"));
            console.log(chalk.italic("4 - Paladino      |"));
            console.log("------------------");
            player.setStats(3);
            prompt();
            console.clear();
        }else if(n == 4){
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
}