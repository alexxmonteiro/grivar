import PromptSync from "prompt-sync";
import chalk from "chalk";
import { enemies } from "../enemies.js";
import { player } from "../player.js";
import { item } from "../inventory.js";

const prompt = PromptSync();
export async function bossStats(enemy_id) {
    process.stdout.write('\x1Bc');
    console.log(chalk.yellow.bold("--P L A Y E R  S T A T S--"));
    console.log(chalk.white.bold(`HP: ${chalk.yellow.bold(player.hp.toFixed(1))}`));
    if (player.hp <= 3) {
        console.log(chalk.white.bold(`ATK: ${chalk.yellow.bold((player.atk + ((1 / 4) * player.hp)).toFixed(1))}`));
    } else {
        console.log(chalk.white.bold(`ATK: ${chalk.yellow.bold(player.atk.toFixed(1))}`));
    }
    console.log(chalk.white.bold(`PER: ${chalk.yellow.bold(player.per.toFixed(1))}`));
    if (player.hp <= 3) {
        console.log(chalk.white.bold(`ALL: ${chalk.yellow.bold(playerAllostasis()[2])}\n`));
    } else {
        console.log(chalk.white.bold(`ALL: ${chalk.yellow.bold(playerAllostasis()[1])}\n`));
    }
    console.log(chalk.yellow.bold("--I T E M S  O N  I N V E N T O R Y--"));
    for (let i = 1; i <= item.stack.length; i++) {
        if (item.itemQuantity(i) > 0) {
            console.log(`${item.itemName(i)}         x${item.itemQuantity(i)}`);
        }
    }
    console.log(chalk.yellow.bold("\n--E N E M Y  S T A T S--"));
    console.log(chalk.yellow.italic("--H E A L T H  P O I N T S--"));
    console.log(chalk.white.bold(`HEAD: ${chalk.yellow.bold(enemies.enemyLifePoints(enemy_id)[1].toFixed(1))}`));
    console.log(chalk.white.italic(`RIGHT ARM A: ${chalk.yellow.bold(enemies.bossLifePoints().rarm_a.toFixed(1))}`));
    console.log(chalk.white.italic(`RIGHT ARM B: ${chalk.yellow.bold(enemies.bossLifePoints().rarm_b.toFixed(1))}`));
    console.log(chalk.white.italic(`RIGHT ARM C: ${chalk.yellow.bold(enemies.bossLifePoints().rarm_c.toFixed(1))}`));
    console.log(chalk.white.italic(`RIGHT ARM D: ${chalk.yellow.bold(enemies.bossLifePoints().rarm_d.toFixed(1))}`));
    console.log(chalk.white.italic(`RIGHT ARM E: ${chalk.yellow.bold(enemies.bossLifePoints().rarm_e.toFixed(1))}`));
    console.log(chalk.white.italic(`LEFT ARM A: ${chalk.yellow.bold(enemies.bossLifePoints().larm_a.toFixed(1))}`));
    console.log(chalk.white.italic(`LEFT ARM B: ${chalk.yellow.bold(enemies.bossLifePoints().larm_b.toFixed(1))}`));
    console.log(chalk.white.italic(`LEFT ARM C: ${chalk.yellow.bold(enemies.bossLifePoints().larm_c.toFixed(1))}`));
    console.log(chalk.white.italic(`LEFT ARM D: ${chalk.yellow.bold(enemies.bossLifePoints().larm_d.toFixed(1))}`));
    console.log(chalk.white.italic(`LEFT ARM E: ${chalk.yellow.bold(enemies.bossLifePoints().larm_e.toFixed(1))}`));
    console.log(chalk.yellow.italic("\n--A T T A C K  P O I N T S--"));
    console.log(chalk.white.italic(`RIGHT ARM A: ${chalk.yellow.bold(enemies.bossAttack().rarm_a.toFixed(1))}`));
    console.log(chalk.white.italic(`RIGHT ARM B: ${chalk.yellow.bold(enemies.bossAttack().rarm_b.toFixed(1))}`));
    console.log(chalk.white.italic(`RIGHT ARM C: ${chalk.yellow.bold(enemies.bossAttack().rarm_c.toFixed(1))}`));
    console.log(chalk.white.italic(`RIGHT ARM D: ${chalk.yellow.bold(enemies.bossAttack().rarm_d.toFixed(1))}`));
    console.log(chalk.white.italic(`RIGHT ARM E: ${chalk.yellow.bold(enemies.bossAttack().rarm_e.toFixed(1))}`));
    console.log(chalk.white.italic(`LEFT ARM A: ${chalk.yellow.bold(enemies.bossAttack().larm_a.toFixed(1))}`));
    console.log(chalk.white.italic(`LEFT ARM B: ${chalk.yellow.bold(enemies.bossAttack().larm_b.toFixed(1))}`));
    console.log(chalk.white.italic(`LEFT ARM C: ${chalk.yellow.bold(enemies.bossAttack().larm_c.toFixed(1))}`));
    console.log(chalk.white.italic(`LEFT ARM D: ${chalk.yellow.bold(enemies.bossAttack().larm_d.toFixed(1))}`));
    console.log(chalk.white.italic(`LEFT ARM E: ${chalk.yellow.bold(enemies.bossAttack().larm_e.toFixed(1))}`));
    prompt();
}

function playerAllostasis() {
    return {
        1: 'NORMAL',
        2: 'ADRENALINE'
    };
}