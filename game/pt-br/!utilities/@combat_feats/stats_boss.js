import PromptSync from "prompt-sync";
import chalk from "chalk";
import { enemies } from "../enemies.js";
import { player } from "../player.js";
import { item } from "../inventory.js";

const prompt = PromptSync();
export async function bossStats(enemy_id) {
    process.stdout.write('\x1Bc');
    console.log(chalk.yellow.bold("--S T A T U S   D O   J O G A D O R--"));
    console.log(chalk.white.bold(`HP: ${chalk.yellow.bold(player.hp.toFixed(1))}`));
    if (player.hp <= 3) {
        console.log(chalk.white.bold(`ATK: ${chalk.yellow.bold((player.atk + ((1 / 4) * player.hp)).toFixed(1))}`));
    } else {
        console.log(chalk.white.bold(`ATK: ${chalk.yellow.bold(player.atk.toFixed(1))}`));
    }
    console.log(chalk.white.bold(`PER: ${chalk.yellow.bold(player.per.toFixed(1))}`));
    if (player.hp <= 3) {
        console.log(chalk.white.bold(`ALOSTASE: ${chalk.yellow.bold(playerAllostasis()[2])}\n`));
    } else {
        console.log(chalk.white.bold(`ALOSTASE: ${chalk.yellow.bold(playerAllostasis()[1])}\n`));
    }
    console.log(chalk.yellow.bold("--I T E N S   N O   I N V E N T Á R I O--"));
    for (let i = 1; i <= item.stack.length; i++) {
        if (item.itemQuantity(i) > 0) {
            console.log(`${item.itemName(i)}         x${item.itemQuantity(i)}`);
        }
    }
    console.log(chalk.yellow.bold("\n--S T A T U S   D O   I N I M I G O--"));
    console.log(chalk.yellow.italic("--P O N T O S   D E   V I D A--"));
    console.log(chalk.white.bold(`CABEÇA: ${chalk.yellow.bold(enemies.enemyLifePoints(enemy_id)[1].toFixed(1))}`));
    console.log(chalk.white.italic(`BRAÇO DIREITO A: ${chalk.yellow.bold(enemies.bossLifePoints().rarm_a.toFixed(1))}`));
    console.log(chalk.white.italic(`BRAÇO DIREITO B: ${chalk.yellow.bold(enemies.bossLifePoints().rarm_b.toFixed(1))}`));
    console.log(chalk.white.italic(`BRAÇO DIREITO C: ${chalk.yellow.bold(enemies.bossLifePoints().rarm_c.toFixed(1))}`));
    console.log(chalk.white.italic(`BRAÇO DIREITO D: ${chalk.yellow.bold(enemies.bossLifePoints().rarm_d.toFixed(1))}`));
    console.log(chalk.white.italic(`BRAÇO DIREITO E: ${chalk.yellow.bold(enemies.bossLifePoints().rarm_e.toFixed(1))}`));
    console.log(chalk.white.italic(`BRAÇO ESQUERDO A: ${chalk.yellow.bold(enemies.bossLifePoints().larm_a.toFixed(1))}`));
    console.log(chalk.white.italic(`BRAÇO ESQUERDO B: ${chalk.yellow.bold(enemies.bossLifePoints().larm_b.toFixed(1))}`));
    console.log(chalk.white.italic(`BRAÇO ESQUERDO C: ${chalk.yellow.bold(enemies.bossLifePoints().larm_c.toFixed(1))}`));
    console.log(chalk.white.italic(`BRAÇO ESQUERDO D: ${chalk.yellow.bold(enemies.bossLifePoints().larm_d.toFixed(1))}`));
    console.log(chalk.white.italic(`BRAÇO ESQUERDO E: ${chalk.yellow.bold(enemies.bossLifePoints().larm_e.toFixed(1))}`));
    console.log(chalk.yellow.italic("\n--P O N T O S   D E   A T A Q U E--"));
    console.log(chalk.white.italic(`BRAÇO DIREITO A: ${chalk.yellow.bold(enemies.bossAttack().rarm_a.toFixed(1))}`));
    console.log(chalk.white.italic(`BRAÇO DIREITO B: ${chalk.yellow.bold(enemies.bossAttack().rarm_b.toFixed(1))}`));
    console.log(chalk.white.italic(`BRAÇO DIREITO C: ${chalk.yellow.bold(enemies.bossAttack().rarm_c.toFixed(1))}`));
    console.log(chalk.white.italic(`BRAÇO DIREITO D: ${chalk.yellow.bold(enemies.bossAttack().rarm_d.toFixed(1))}`));
    console.log(chalk.white.italic(`BRAÇO DIREITO E: ${chalk.yellow.bold(enemies.bossAttack().rarm_e.toFixed(1))}`));
    console.log(chalk.white.italic(`BRAÇO ESQUERDO A: ${chalk.yellow.bold(enemies.bossAttack().larm_a.toFixed(1))}`));
    console.log(chalk.white.italic(`BRAÇO ESQUERDO B: ${chalk.yellow.bold(enemies.bossAttack().larm_b.toFixed(1))}`));
    console.log(chalk.white.italic(`BRAÇO ESQUERDO C: ${chalk.yellow.bold(enemies.bossAttack().larm_c.toFixed(1))}`));
    console.log(chalk.white.italic(`BRAÇO ESQUERDO D: ${chalk.yellow.bold(enemies.bossAttack().larm_d.toFixed(1))}`));
    console.log(chalk.white.italic(`BRAÇO ESQUERDO E: ${chalk.yellow.bold(enemies.bossAttack().larm_e.toFixed(1))}`));
    prompt();
}

function playerAllostasis() {
    return {
        1: 'NORMAL',
        2: 'ADRENALINA'
    };
}