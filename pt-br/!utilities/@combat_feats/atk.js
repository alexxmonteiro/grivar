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
    if (enm.torso === true) option.push('TORSO');
    if (enm.larm === true) option.push('BESQ');  
    if (enm.rarm === true) option.push('BDIR');  
    if (enm.lleg === true) option.push('PESQ');  
    if (enm.rleg === true) option.push('PDIR');  

    return option;
}

export async function battleFase() {
    process.stdout.write('\x1Bc');
    let bPart;
    let cFace;
    let options = enableBodyPart();
    bPart = prompt(chalk.white.italic(`Qual parte do corpo? `) + chalk.yellow.bold(`(${options}) `));
    while (!options.includes(bPart.toUpperCase())) {
        bPart = prompt(chalk.red.italic(`ERRO: Qual parte do corpo? `) + chalk.yellow.bold(`(${options}) `));
    }
    dmgOnEnemy(bPart.toLowerCase());
}

function dmgOnEnemy(part) {
    let internalPart = part;
    if (part === 'cabeca') internalPart = 'head';
    if (part === 'besq') internalPart = 'larm';
    if (part === 'bdir') internalPart = 'rarm';
    if (part === 'pesq') internalPart = 'lleg';
    if (part === 'pdir') internalPart = 'rleg';

    let sucess = false;
    let dice = d10() + (player.per * 0.5);
    let critStike = d10();
    let dmg;

    if (missCount >= 3) {
        dice = 8;
        missCount = 0;
    }

    if (internalPart === 'head' && dice > 8) {
        sucess = true;
    } else if (['lleg', 'rleg'].includes(internalPart) && dice > 5) {
        sucess = true;
    } else if (['larm', 'rarm'].includes(internalPart) && dice > 7) {
        sucess = true;
    } else if (internalPart === 'torso' && dice > 4) {
        sucess = true;
    }

    if (!sucess) {
        console.log(chalk.red.bold("E R R O U"));
        missCount++;
        prompt();
        return;
    }

    missCount = 0;

    let tradBodyPart = part.toUpperCase();
    if (internalPart === 'larm') tradBodyPart = 'BRACO ESQUERDO';
    if (internalPart === 'rarm') tradBodyPart = 'BRACO DIREITO';
    if (internalPart === 'lleg') tradBodyPart = 'PERNA ESQUERDA';
    if (internalPart === 'rleg') tradBodyPart = 'PERNA DIREITA';

    console.log(chalk.white.italic(`Você atingiu o ${chalk.yellow.bold(tradBodyPart)}`));

    if (critStike > 8) {
        dmg = player.atk * (1.5 + (player.per * 0.1));
    } else {
        dmg = player.atk;
    }

    if (player.hp <= 3) {
        dmg += ((1 / 4) * player.hp);
    }

    if(player.class.toLowerCase() === 'mago' || player.class.toLowerCase() === 'arqueiro'){
        if(['larm', 'rarm', 'lleg', 'rleg'].includes(internalPart.toLowerCase())){
            dmg += player.per * 0.1;
        }
    }

    enm[`${internalPart}_hp`] = Math.max(0, enm[`${internalPart}_hp`] - dmg);
    if (critStike > 8) {
        console.log(chalk.white.italic(`A C E R T O  C R Í T I C O \n`) + chalk.yellow.bold(`- ${dmg.toFixed(1)}`));
    } else {
        console.log(chalk.yellow.bold(`- ${(dmg.toFixed(1))}`));
    }

    if (enm[internalPart] === true && enm[`${internalPart}_hp`] <= 0) {
        enm[internalPart] = false;
        console.log(chalk.white.italic(`Você destruiu o ${chalk.red.bold(tradBodyPart)}`));

        if (internalPart === 'lleg' || internalPart === 'rleg') {
            enm['legs_add_base'] = 0;
            console.log(chalk.yellow.italic(`O movimento do inimigo está gravemente prejudicado!`));
        }

        if (internalPart === 'head' || internalPart === 'torso') {
            enm.parts_destructed = 3;
            console.log(chalk.yellow.bold(`Sem vida, ele cai no chão...`));
        } else {
            enm.parts_destructed++;
            if (enm.parts_destructed === 3) {
                console.log(chalk.yellow.bold(`Sem vida, ele cai no chão...`));
            }
        }
    }

    prompt();
}