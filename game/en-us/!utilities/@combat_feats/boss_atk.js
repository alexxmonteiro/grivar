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
    prompt(chalk.yellow.bold("ENEMY IS PREPARING AN ATTACK"));

    let dmg = 0;
    let d = d6();
    let critStrike = d10();
    let f = 'ENEMY IS UNABLE TO ATTACK';

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
            f = `ENEMY CHOOSED LEFT ARM (${chosenPart.toUpperCase().replace('LARM_', '')})`;
        } else {
            f = `ENEMY CHOOSED RIGHT ARM (${chosenPart.toUpperCase().replace('RARM_', '')})`;
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
        prompt(chalk.red.bold(`ENEMY ATTACKED...`));

        const bossDmgObject = enemies.bossAttack();
        dmg = bossDmgObject[chosenPart] || 0;

        if (critStrike > 8) {
            prompt(chalk.red.italic(`C R I T I C A L   H I T`));
            dmg = Math.round(dmg * 1.5);
        }

        player.lifedmg(dmg);
        console.log(chalk.red.bold(`-${dmg.toFixed(1)}`));
        missCount = 0;
    }
    else if (allActiveParts.length === 0) {
        console.log(chalk.yellow.italic("He writhes furiously; the lack of upper limbs is likely what is forcing him to do so."));
    }
    else {
        console.log(chalk.yellow.italic("M I S S"));
        missCount++;
    }

    prompt();
}