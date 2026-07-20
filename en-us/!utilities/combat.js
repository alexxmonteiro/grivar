import PromptSync from "prompt-sync";
import chalk from "chalk";
import { enemies } from "./enemies.js";
import { haT, d3, d4, d5, d6, d10 } from "./randomizr.js";
import { player } from "./player.js";
import { item } from "./inventory.js";
import { battleFase } from "./@combat_feats/atk.js"
import { inventoryFase } from "./@combat_feats/inv.js";
import { stats } from "./@combat_feats/stats.js";
import { enemyAtk } from "./@combat_feats/enm_atk.js";
import { triggerItem } from "../!cutscenes/cts.js";
<<<<<<< HEAD
import { bossBattle } from "./@combat_feats/atk_boss.js";
import { bossStats } from "./@combat_feats/stats_boss.js";
import { bossAtk } from "./@combat_feats/boss_atk.js";
=======
>>>>>>> 14a6a01 (grivar 1.1.1)

const prompt = PromptSync();

export var enm;
export async function combat(enemy_id) {
    enemies.addEnemies(enemy_id);
    enemies.enemySetAtributes(enemy_id);
<<<<<<< HEAD
    enm = enemies.info(enemy_id);

    const isBoss = (enemy_id === 3);
    const maxParts = isBoss ? 6 : 3; 

    process.stdout.write('\x1Bc');
    prompt(chalk.yellow.italic(`A ${chalk.white.bold(enemies.enemyName(enemy_id).toUpperCase())} IS IN COMBAT WITH YOU!`));

    while (enm && enm.parts_destructed < maxParts && player.hp > 0) {
        let playerFase = 0;

        while (playerFase === 0) {
            process.stdout.write('\x1Bc');
            let action = prompt(chalk.white.italic(`What do you do? `) + chalk.yellow.bold(`(ATK | INV | STATS) `));

=======

    enm = enemies.info(enemy_id);

    process.stdout.write('\x1Bc');
    prompt(chalk.yellow.italic(`A ${chalk.white.bold(enemies.enemyName(enemy_id).toUpperCase())} IS IN COMBAT WITH YOU!`));
    while (enm && enm.parts_destructed < 3 && player.hp > 0) {
        let playerFase = 0;
        while (playerFase === 0) {
            let action;
            process.stdout.write('\x1Bc');
            action = prompt(chalk.white.italic(`What do you do? `) + chalk.yellow.bold(`(ATK | INV | STATS) `));
>>>>>>> 14a6a01 (grivar 1.1.1)
            while (!['atk', 'inv', 'stats'].includes(action.toLowerCase())) {
                action = prompt(chalk.red.italic(`ERROR: What do you do? `) + chalk.yellow.bold(`(ATK | INV | STATS) `));
            }

<<<<<<< HEAD
            const chosenAction = action.toLowerCase();

            if (chosenAction === 'atk') {
                isBoss ? await bossBattle() : await battleFase();
                playerFase = 1;
            } else if (chosenAction === 'inv') {
                if (item.count >= 1) {
                    await inventoryFase();
                    playerFase = 1;
                } else {
                    prompt(chalk.red.italic("Can't go to the inventory!"));
                    process.stdout.write('\x1Bc');
                }
            } else if (chosenAction === 'stats') {
                isBoss ? await bossStats(enemy_id) : await stats(enemy_id);
            }
        }

        if (enm && enm.parts_destructed < maxParts && player.hp > 0) {
            isBoss ? await bossAtk() : await enemyAtk();
        }
    }

    process.stdout.write('\x1Bc');

    if (player.hp <= 0) {
        console.log(chalk.yellow.italic("G A M E   O V E R!"));
        prompt();
        process.exit();
    } 
    
    if (enm.parts_destructed === maxParts) {
        if (isBoss) {
            prompt(chalk.yellow.italic("E X E M P L A R   E X P U R G A T U M"));
        } else {
            prompt(chalk.yellow.italic("H E   I S   D E A D . . . "));
            prompt(chalk.yellow.bold("He dropped something on the ground; curious, you decide to see what it is... "));
            triggerItem(haT());
        }
    }
}
=======
            if (action.toLowerCase() === 'atk') {
                await battleFase();
                playerFase = 1;
            } else if (action.toLowerCase() === 'inv' && item.count >= 1) {
                await inventoryFase();
                playerFase = 1;
            } else if (action.toLowerCase() === 'stats') {
                await stats(enemy_id);
            } else {
                prompt(chalk.red.italic("Can´t go to the inventory!"));
                process.stdout.write('\x1Bc');
            }
        }
        if (enm && enm.parts_destructed < 3 && player.hp > 0) {
            await enemyAtk();
        }
    }

    if(player.hp <= 0){
        process.stdout.write('\x1Bc');
        console.log(chalk.yellow.italic("G A M E  O V E R!"));
        process.exit();
    }else if(enm.parts_destructed === 3){
        process.stdout.write('\x1Bc');
        prompt(chalk.yellow.italic("H E  I S  D E A D . . . "));
        prompt(chalk.yellow.bold("He dropped something on the ground; curious, you decide to see what it is... "));
        triggerItem(haT());
    }
}
>>>>>>> 14a6a01 (grivar 1.1.1)
