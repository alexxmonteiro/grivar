import PromptSync from "prompt-sync";
import chalk from "chalk";
import { enemies } from "../enemies.js";
import { haT, d6, d10 } from "../randomizr.js";
import { player } from "../player.js";
import { enm } from "../combat.js";

const prompt = PromptSync();

let missCount = 0;
export async function enemyAtk() {
    console.clear();
    prompt(chalk.yellow.bold("ENEMY IS PREPARING A ATTACK"));
    let dmg = 0;
    let c = haT();
    let d = d6();
    let critStike = d10();
    let f = 'ENEMY IS UNABLE TO ATTACK';
    if (enm[`larm_hp`] <= 0 && enm[`rarm_hp`] <= 0) {
        c = null;
        d = null;
    } else if (enm[`larm_hp`] <= 0) {
        c = 2;
    } else if (enm[`rarm_hp`] <= 0) {
        c = 1;
    }

    if (c !== null) {
        switch (c) {
            case 1: dmg = enm.larm_dmg(); f = 'ENEMY CHOOSED LEFT ARM'; break;
            case 2: dmg = enm.rarm_dmg(); f = 'ENEMY CHOOSED RIGHT ARM'; break;
        }
    }

    if (missCount >= 3) {
        d = 6;
        missCount = 0;
    }

    prompt(chalk.yellow.bold(f));
    if (d !== null && c !== null && d > 4) {
        prompt(chalk.red.bold(`ENEMY ATTACKED...`));
        if (critStike > 8) {
            prompt(chalk.red.italic(`C R I T I C A L  H I T`));
            dmg = Math.round(dmg * 1.5);
        }
        player.lifedmg(dmg);
        console.log(chalk.red.bold(`-${dmg.toFixed(1)}`));
        missCount = 0;
    } else if (enm[`larm_hp`] <= 0 && enm[`rarm_hp`] <= 0) {
        console.log(chalk.yellow.italic("He writhes furiously; the lack of upper limbs is likely what is forcing him to do so."));
    } else {
        console.log(chalk.yellow.italic("M I S S"));
        missCount++;
    }

    prompt();
}