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

    if (enm.head === true) option.push('CABECA');
    if (enm.larm_a === true) option.push('BR_ESQ_A');
    if (enm.larm_b === true) option.push('BR_ESQ_B');
    if (enm.larm_c === true) option.push('BR_ESQ_C');
    if (enm.larm_d === true) option.push('BR_ESQ_D');
    if (enm.larm_e === true) option.push('BR_ESQ_E');
    if (enm.rarm_a === true) option.push('BR_DIR_A');
    if (enm.rarm_b === true) option.push('BR_DIR_B');
    if (enm.rarm_c === true) option.push('BR_DIR_C');
    if (enm.rarm_d === true) option.push('BR_DIR_D');
    if (enm.rarm_e === true) option.push('BR_DIR_E');

    return option;
}

export async function bossBattle() {
    process.stdout.write('\x1Bc');
    let bPart;
    let cFace;
    let options = enableBodyPart();
    
    bPart = prompt(chalk.white.italic(`Qual parte do corpo? `) + chalk.yellow.bold(`(${options}) `));
    while (!options.includes(bPart.toUpperCase())) {
        bPart = prompt(chalk.red.italic(`ERRO: Qual parte do corpo? `) + chalk.yellow.bold(`(${options}) `));
    }
    
    let internalPart = bPart.toLowerCase();
    if (internalPart === 'cabeca') internalPart = 'head';
    else if (internalPart.startsWith('br_esq_')) internalPart = internalPart.replace('br_esq_', 'larm_');
    else if (internalPart.startsWith('br_dir_')) internalPart = internalPart.replace('br_dir_', 'rarm_');

    dmgOnEnemy(internalPart);
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
    } else if (['larm_a', 'larm_b', 'larm_c', 'larm_d', 'larm_e', 'rarm_a', 'rarm_b', 'rarm_c', 'rarm_d', 'rarm_e'].includes(part) && dice > 5) {
        sucess = true;
    }

    if (!sucess) {
        console.log(chalk.red.bold("E R R O U"));
        missCount++;
        prompt();
        return;
    }

    missCount = 0;

    let ptPartName = part.toUpperCase();
    if (ptPartName === 'HEAD') ptPartName = 'CABEÇA';
    else ptPartName = ptPartName.replace('LARM_', 'BRAÇO ESQUERDO ').replace('RARM_', 'BRAÇO DIREITO ');

    console.log(chalk.white.italic(`Você acertou o ${chalk.yellow.bold(ptPartName)}`));

    if (critStike > 8) {
        dmg = player.atk * (1.5 + (player.per * 0.1));
    } else {
        dmg = player.atk;
    }

    if (player.hp <= 3) {
        dmg += ((1 / 4) * player.hp);
    }

    if (player.class.toLowerCase() === 'mage' || player.class.toLowerCase() === 'ranger' || player.class.toLowerCase() === 'mago' || player.class.toLowerCase() === 'arqueiro') {
        if (['larm_a', 'larm_b', 'larm_c', 'larm_d', 'larm_e', 'rarm_a', 'rarm_b', 'rarm_c', 'rarm_d', 'rarm_e'].includes(part.toLowerCase())) {
            dmg += player.per * 0.1;
        }
    }

    enm[`${part}_hp`] = Math.max(0, enm[`${part}_hp`] - dmg);
    if (critStike > 8) {
        console.log(chalk.white.italic(`A T A Q U E  C R Í T I C O \n`) + chalk.yellow.bold(`- ${dmg.toFixed(1)}`));
    } else {
        console.log(chalk.yellow.bold(`- ${(dmg.toFixed(1))}`));
    }

    if (enm[part] === true && enm[`${part}_hp`] <= 0) {
        enm[part] = false;
        console.log(chalk.white.italic(`Você destruiu o ${chalk.red.bold(ptPartName)}`));

        if (part === 'head') {
            enm.parts_destructed = 6;
        } else {
            enm.parts_destructed++;
            if (enm.parts_destructed === 6) {
                console.log(chalk.yellow.bold(`Sem vida, ele cai no chão...`));
            }
        }
    }

    prompt();
}