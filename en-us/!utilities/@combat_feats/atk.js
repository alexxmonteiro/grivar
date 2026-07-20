import PromptSync from "prompt-sync";
import chalk from "chalk";
import { enemies } from "../enemies.js";
import { d10 } from "../randomizr.js";
import { player } from "../player.js";
import { enm } from "../combat.js";

const prompt = PromptSync();

let missCount = 0;
function enableBodyPart() {
    let option = [];

    if (enm.head === true) option.push('HEAD');
    if (enm.torso === true) option.push('TORSO');
    if (enm.larm === true) option.push('LARM');
    if (enm.rarm === true) option.push('RARM');
    if (enm.lleg === true) option.push('LLEG');
    if (enm.rleg === true) option.push('RLEG');

    return option;
}

export async function battleFase() {
    process.stdout.write('\x1Bc');
    let bPart;
    let options = enableBodyPart();
    bPart = prompt(chalk.white.italic(`Which part of the body? `) + chalk.yellow.bold(`(${options}) `));
    while (!options.includes(bPart.toUpperCase())) {
        bPart = prompt(chalk.red.italic(`ERROR: Which part of the body? `) + chalk.yellow.bold(`(${options}) `));
    }
    dmgOnEnemy(bPart.toLowerCase());
}

function dmgOnEnemy(part) {
    let sucess = false;
    let dice = d10() + (player.per * 0.5);
    let critStike = d10();
    let dmg;

    if (missCount >= 3) {
        dice = 8;
        missCount = 0;
    }

    if (part === 'head' && dice > 8) {
        sucess = true;
    } else if (['lleg', 'rleg'].includes(part) && dice > 5) {
        sucess = true;
    } else if (['larm', 'rarm'].includes(part) && dice > 7) {
        sucess = true;
    } else if (part === 'torso' && dice > 4) {
        sucess = true;
    }

    if (!sucess) {
        console.log(chalk.red.bold("M I S S"));
        missCount++;
        prompt();
        return;
    }

    missCount = 0;

    console.log(chalk.white.italic(`You hit the ${chalk.yellow.bold(part.toUpperCase())}`));

    if (critStike > 8) {
        dmg = player.atk * (1.5 + (player.per * 0.1));
    } else {
        dmg = player.atk;
    }

    if (player.hp <= 3) {
        dmg += ((1 / 4) * player.hp);
    }

    if (player.class.toLowerCase() === 'mage' || player.class.toLowerCase() === 'ranger') {
        if (['larm', 'rarm', 'lleg', 'rleg'].includes(part.toLowerCase())) {
            dmg += player.per * 0.1;
        }
    }

    enm[`${part}_hp`] = Math.max(0, enm[`${part}_hp`] - dmg);
    if (critStike > 8) {
        console.log(chalk.white.italic(`C R I T I C A L   H I T \n`) + chalk.yellow.bold(`- ${dmg.toFixed(1)}`));
    } else {
        console.log(chalk.yellow.bold(`- ${(dmg.toFixed(1))}`));
    }

    if (enm[part] === true && enm[`${part}_hp`] <= 0) {
        enm[part] = false;
        console.log(chalk.white.italic(`You destroyed ${chalk.red.bold(part.toUpperCase())}`));

        if (part === 'lleg' || part === 'rleg') {
            enm['legs_add_base'] = 0;
            console.log(chalk.yellow.italic(`The enemy's movement is severely impaired!`));
        }

        if (part === 'head' || part === 'torso') {
            enm.parts_destructed = 3;
            console.log(chalk.yellow.bold(`Lifeless, he falls to the ground...`));
        } else {
            enm.parts_destructed++;
            if (enm.parts_destructed === 3) {
                console.log(chalk.yellow.bold(`Lifeless, he falls to the ground...`));
            }
        }
    }

    prompt();
}