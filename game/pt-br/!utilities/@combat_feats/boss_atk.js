import PromptSync from "prompt-sync";
import chalk from "chalk";
import { enemies } from "../enemies.js";
import { haT, d6, d10 } from "../randomizr.js";
import { player } from "../player.js";
import { enm } from "../combat.js";

const prompt = PromptSync();
let missCount = 0;
export async function bossAtk() {
    console.clear();
    prompt(chalk.yellow.bold("O INIMIGO ESTÁ PREPARANDO UM ATAQUE"));

    let dmg = 0;
    let d = d6();
    let critStrike = d10();
    let f = 'O INIMIGO NÃO CONSEGUE ATACAR';

    const larmParts = ['larm_a', 'larm_b', 'larm_c', 'larm_d', 'larm_e'];
    const rarmParts = ['rarm_a', 'rarm_b', 'rarm_c', 'rarm_d', 'rarm_e'];

    const activeLeftParts = larmParts.filter(part => enm[`${part}_hp`] > 0);
    const activeRightParts = rarmParts.filter(part => enm[`${part}_hp`] > 0);

    const allActiveParts = [...activeLeftParts, ...activeRightParts];
    let chosenPart = null;

    if (allActiveParts.length > 0) {
        const randomIndex = Math.floor(Math.random() * allActiveParts.length);
        chosenPart = allActiveParts[randomIndex];

        if (chosenPart.startsWith('larm')) {
            f = `O INIMIGO ESCOLHEU O BRAÇO ESQUERDO (${chosenPart.toUpperCase().replace('LARM_', '')})`;
        } else {
            f = `O INIMIGO ESCOLHEU O BRAÇO DIREITO (${chosenPart.toUpperCase().replace('RARM_', '')})`;
        }
    } else {
        d = null;
    }

    if (missCount >= 3 && d !== null) {
        d = 6;
        missCount = 0;
    }

    prompt(chalk.yellow.bold(f));

    if (d !== null && chosenPart !== null && d > 4) {
        prompt(chalk.red.bold(`O INIMIGO ATCOU...`));

        const bossDmgObject = enemies.bossAttack();
        dmg = bossDmgObject[chosenPart] || 0;

        if (critStrike > 8) {
            prompt(chalk.red.italic(`A T A Q U E   C R Í T I C O`));
            dmg = Math.round(dmg * 1.5);
        }

        player.lifedmg(dmg);
        console.log(chalk.red.bold(`-${dmg.toFixed(1)}`));
        missCount = 0;
    }
    else if (allActiveParts.length === 0) {
        console.log(chalk.yellow.italic("Ele se contorce furiosamente; a falta de membros superiores é provavelmente o que o está forçando a fazer isso."));
    }
    else {
        console.log(chalk.yellow.italic("E R R O U"));
        missCount++;
    }

    prompt();
}