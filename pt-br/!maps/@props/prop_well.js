import PromptSync from "prompt-sync";
import chalk from "chalk";
import { d6, haT } from "../../!utilities/randomizr.js";
import { player } from "../../!utilities/player.js";
import { item } from "../../!utilities/inventory.js";
import { promises } from "fs";
import { resolve } from "dns";

const prompt = PromptSync();

const dice = d6();
export async function well_triggerProp() {
    let it = item;
    console.log(chalk.yellow.italic(`Você encontrou um poço; a água é escassa, e um brilho espectral — destacando-se ao redor — brilha no 
pouco que resta. Você sente um desejo irresistível de recuperar o que quer que esteja no fundo! O poço possui um mecanismo que segura 
um balde preso a uma corda; a corda parece frágil e gasta pelo tempo, e pode romper antes de chegar ao fundo. 
ROLE UM D6 PARA DETERMINAR SUA CHANCE DE SUCESSO!`));
    prompt();

    function rollDice() {
        let laps = 0;
        return new Promise((resolve) => {
            const intevalDice = setInterval(() => {
                console.clear();
                console.log(chalk.yellow.italic(Math.floor(Math.random() * 6) + 1));
                laps++;

                if (laps >= 15) {
                    console.clear();
                    clearInterval(intevalDice);

                    console.log(chalk.bold(dice));
                    prompt();
                    gIt(dice, haT());

                    resolve();
                }
            }, 50)
        });
    }

    function gIt(dice, id) {
        console.clear();
        if (player.per + dice >= 6) {
            console.log(chalk.yellow.italic("Incrivelmente... a corda não arrebentou ao ser puxada do fundo do poço!"));
            it.addItem(id);
            console.log(chalk.yellow.italic(`Você encontrou ${chalk.white.bold(it.itemName(id))}`));
        } else {
            console.log(chalk.yellow.italic("Como esperado... a corda não chegou nem na metade do caminho; ela arrebentou! O que estava no fundo do poço permaneceu um mistério..."));
        }
    }

    await rollDice();
} 