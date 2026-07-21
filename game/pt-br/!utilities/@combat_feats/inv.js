import PromptSync from "prompt-sync";
import chalk from "chalk";
import { enemies } from "../enemies.js";
import { haT, d5 } from "../randomizr.js";
import { player } from "../player.js";
import { item } from "../inventory.js";
import { enm } from "../combat.js";

const prompt = PromptSync();

export async function inventoryFase() {
    let choose;
    let possibleItems = [];
    process.stdout.write('\x1Bc');
    console.log(chalk.yellow.italic("--I N V E N T Á R I O--"));

    for (let i = 1; i <= item.stack.length; i++) {
        if (item.itemQuantity(i) > 0) {
            possibleItems.push(item.itemName(i).toLowerCase());
            console.log(`${item.itemName(i)}         x${item.itemQuantity(i)}`);
        }
    }

    if (possibleItems.length === 0) {
        console.log(chalk.red("Inventário vazio!"));
        prompt();
        return;
    }

    choose = prompt(chalk.yellow.italic(`Escolha um item: `));

    while (!possibleItems.includes(choose.toLowerCase())) {
        choose = prompt(chalk.red.bold(`ERRO: Escolha um item válido: `));
    }

    const chosenName = choose.toLowerCase();

    if (chosenName === item.itemName(1).toLowerCase()) {
        const thrown = await throwItem(1);
        if (thrown) item.removeItem(1);
    } else if (chosenName === item.itemName(2).toLowerCase()) {
        await useItem(2);
    }

    prompt();
}

async function throwItem(id) {
    let part;
    let sucess = false;
    let n, r, dmg;

    n = Number(prompt(chalk.white.italic(`Cara ou coroa?`) + chalk.yellow.bold(` (1 | 2) `)));
    while (![1, 2].includes(n)) {
        n = Number(prompt(chalk.red.italic(`ERRO: Cara ou coroa?`) + chalk.yellow.bold(` (1 | 2) `)));
    }

    r = await rollCoin();

    if (r === n) {
        sucess = true;
    }

    if (!sucess) {
        console.log(chalk.red.bold("E R R O U"));
        return true;
    }

    switch (d5()) {
        case 1: part = 'torso'; break;
        case 2: part = 'larm'; break;
        case 3: part = 'rarm'; break;
        case 4: part = 'lleg'; break;
        case 5: part = 'rleg'; break;
    }

    const bodyParts = {
        torso: { name: 'TORSO', article: 'o' },
        larm: { name: 'BRAÇO ESQUERDO', article: 'o' },
        rarm: { name: 'BRAÇO DIREITO', article: 'o' },
        lleg: { name: 'PERNA ESQUERDA', article: 'a' },
        rleg: { name: 'PERNA DIREITA', article: 'a' }
    };

    const targetPart = bodyParts[part];

    console.log(chalk.white.italic(`Você atingiu ${targetPart.article} ${chalk.yellow.bold(targetPart.name)}`));
    dmg = item.itens[id].damage;

    enm[`${part}_hp`] = Math.max(0, enm[`${part}_hp`] - dmg);
    console.log(chalk.white.italic(`-${chalk.yellow.bold(dmg.toFixed(1))}`));

    if (enm[part] === true && enm[`${part}_hp`] <= 0) {
        enm[part] = false;
        console.log(chalk.white.italic(`Você destruiu ${targetPart.article} ${chalk.red.bold(targetPart.name)}`));

        if (part === 'torso') {
            enm.parts_destructed = 3;
            console.log(chalk.yellow.bold(`Sem vida, ele cai no chão...`));
        } else {
            enm.parts_destructed++;
            if (enm.parts_destructed === 3) {
                console.log(chalk.yellow.bold(`Sem vida, ele cai no chão...`));
            }
        }
    }

    if (['lleg', 'rleg'].includes(part)) {
        if (enm[`lleg_hp`] <= 0 || enm[`rleg_hp`] <= 0) {
            enm[`legs_add_base`] = 0;
        }
    }

    return true;
}

async function rollCoin() {
    let laps = 0;
    let n = 1;
    let m;

    return new Promise((resolve) => {
        const rcoin = setInterval(() => {
            console.clear();
            n = (n % 2 === 0) ? n - 1 : n + 1;

            m = (n === 1) ? 'CARA' : 'COROA';

            console.log(m);
            laps++;

            if (laps >= 20) {
                clearInterval(rcoin);
                n = haT();

                console.clear();
                m = (n === 1) ? 'CARA' : 'COROA';

                console.log(m);
                resolve(n);
            }
        }, 75);
    });
}

async function useItem(id) {
    let itemRegen = item.itens[id].lifeRegen;
    let maxLife = player.getLifePerClass(player.class);

    if (player.hp < maxLife) {
        let healCalc = player.heal(itemRegen, maxLife);
        console.log(chalk.white.italic(`+${chalk.yellow.bold(healCalc.toFixed(1))}`));
        item.removeItem(id);
    } else {
        console.log(chalk.red.italic(`Não é possível usar `) + chalk.yellow.bold(`${item.itemName(id)}`));
    }
}