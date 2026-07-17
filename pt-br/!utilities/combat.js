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

const prompt = PromptSync();

export var enm;
export async function combat(enemy_id) {
    enemies.addEnemies(enemy_id);
    enemies.enemySetAtributes(enemy_id);

    enm = enemies.info(enemy_id);

    process.stdout.write('\x1Bc');
    prompt(chalk.yellow.italic(`UM ${chalk.white.bold(enemies.enemyName(enemy_id).toUpperCase())} ESTÁ EM COMBATE COM VOCÊ!`));
    while (enm && enm.parts_destructed < 3 && player.hp > 0) {
        let playerFase = 0;
        while (playerFase === 0) {
            let action;
            process.stdout.write('\x1Bc');
            action = prompt(chalk.white.italic(`O que você faz? `) + chalk.yellow.bold(`(ATK | INV | STATS) `));
            while (!['atk', 'inv', 'stats'].includes(action.toLowerCase())) {
                action = prompt(chalk.red.italic(`ERRO: O que você faz? `) + chalk.yellow.bold(`(ATK | INV | STATS) `));
            }

            if (action.toLowerCase() === 'atk') {
                await battleFase();
                playerFase = 1;
            } else if (action.toLowerCase() === 'inv' && item.count >= 1) {
                await inventoryFase();
                playerFase = 1;
            } else if (action.toLowerCase() === 'stats') {
                await stats(enemy_id);
            } else {
                prompt(chalk.red.italic("Não é possível acessar o inventário!"));
                process.stdout.write('\x1Bc');
            }
        }
        if (enm && enm.parts_destructed < 3 && player.hp > 0) {
            await enemyAtk();
        }
    }

    if(player.hp <= 0){
        process.stdout.write('\x1Bc');
        console.log(chalk.yellow.italic("F I M   D E   J O G O!"));
        process.exit();
    }else if(enm.parts_destructed === 3){
        process.stdout.write('\x1Bc');
        prompt(chalk.yellow.italic("E L E   E S T Á   M O R T O . . . "));
        prompt(chalk.yellow.bold("Ele deixou cair algo no chão. Curioso, você decide ver o que é... "));
        triggerItem(haT());
    }
}
