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
    let act;
    let possibleItems = [];
    process.stdout.write('\x1Bc');
    console.log(chalk.yellow.italic("--I N V E N T O R Y--"));
    for (let i = 1; i <= item.stack.length; i++) {
        possibleItems.push(item.itemName(i).toLowerCase());
        console.log(`${item.itemName(i)}         x${item.itemQuantity(i)}`);
    }

    choose = prompt(chalk.yellow.italic(`Choose one item: `));

    while (!possibleItems.includes(choose.toLowerCase())) {
        choose = prompt(chalk.red.bold(`ERROR: Choose one item: `));
    }

    switch (choose.toLowerCase()) {
        case item.itemName(1).toLowerCase(): await throwItem(1); item.removeItem(1); break;
        case item.itemName(2).toLowerCase(): await useItem(2); break;
    }
    prompt();
}

async function throwItem(id) {
    let coin;
    let part;
    let sucess = false;
    let n;
    let r;
    let dmg;
    n = Number(prompt(chalk.white.italic(`Heads or tails?`) + chalk.yellow.bold(` (1 | 2) `)));
    while (![1, 2].includes(n)) {
        n = Number(prompt(chalk.red.italic(`ERROR: Heads or tails?`) + chalk.yellow.bold(` (1 | 2) `)));
    }

    r = await rollCoin()

    if (r === n) {
        sucess = true;
    }

    if (!sucess) {
        console.log(chalk.red.bold("M I S S"));
        return;
    }

    switch (d5()) {
        case 1: part = 'torso'; break;
        case 2: part = 'larm'; break;
        case 3: part = 'rarm'; break;
        case 4: part = 'lleg'; break;
        case 5: part = 'rleg'; break;
    }

    console.log(chalk.white.italic(`You hit the ${chalk.yellow.bold(part.toUpperCase())}`));
    dmg = item.itens[id].damage;

    enm[`${part}_hp`] = Math.max(0, enm[`${part}_hp`] - dmg);
    console.log(chalk.white.italic(`-${chalk.yellow.bold(dmg.toFixed(1))}`));

    if (enm[part] === true && enm[`${part}_hp`] <= 0) {
        enm[part] = false;
        console.log(chalk.white.italic(`You destroied ${chalk.red.bold(part.toUpperCase())}`));

        if (part === 'torso') {
            enm.parts_destructed = 3;
            console.log(chalk.yellow.bold(`Lifeless, he falls to the ground...`));
        } else {
            enm.parts_destructed++;
            if (enm.parts_destructed === 3) {
                console.log(chalk.yellow.bold(`Lifeless, he falls to the ground...`));
            }
        }
    }

    if (enm[`lleg`] === true || enm[`rleg`] === true) {
        if (enm[`lleg_hp`] <= 0 || enm[`rleg_hp`] <= 0) {
            enm[`legs_add_base`] = 0;
        }
    }
}

async function rollCoin() {
    let laps = 0;
    let n = 1;
    let m;
    return new Promise((resolve) => {
        const rcoin = setInterval(() => {
            console.clear();
            if (n % 2 == 0) { n--; } else { n++; }

            switch (n) {
                case 1: m = 'heads'; break;
                case 2: m = 'tails'; break;
            }

            console.log(m);
            laps++;
            if (laps >= 20) {
                clearInterval(rcoin);

                n = haT();

                console.clear();
                switch (n) {
                    case 1: m = 'heads'; break;
                    case 2: m = 'tails'; break;
                }

                console.log(m);
                resolve(n);

                return n;
            }
        }, 75)
    });
}

async function useItem(id) {
    let itemRegen = item.itens[id].lifeRegen;
    let maxLife = player.getLifePerClass(player.class);
    if (player.hp < maxLife) {
        let healCalc = player.heal(itemRegen, maxLife);
        console.log(chalk.white.italic(`+${chalk.yellow.bold(healCalc.toFixed(1))}`));
        item.removeItem(2);
    } else {
        console.log(chalk.red.italic(`Can´t use `) + chalk.yellow.bold(`${item.itemName(id)}`));
    }
} 