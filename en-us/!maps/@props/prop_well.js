import PromptSync from "prompt-sync";
import chalk from "chalk";
import { d6, haT } from "../../!utilities/randomizr.js";
import { player } from "../../!utilities/player.js";
import { item } from "../../!utilities/inventory.js";
import { promises } from "fs";
import { resolve } from "dns";

const prompt = PromptSync();

const dice = d6();
export async function well_triggerProp() {
    let it = item;
    console.log(chalk.yellow.italic(`You have found a well; water is scarce, and a spectral glow—standing out against the surroundings—shimmers on the 
little that remains. You feel an irresistible urge to retrieve whatever lies at the bottom! The well features a mechanism holding 
a bucket attached to a rope; the rope looks fragile and worn by time, and it might snap before reaching the bottom. 
ROLL A D6 TO DETERMINE YOUR CHANCE OF SUCCESS!`));
    prompt();

    function rollDice() {
        let laps = 0;
        return new Promise((resolve) => {
            const intevalDice = setInterval(() => {
                console.clear();
                console.log(chalk.yellow.italic(Math.floor(Math.random() * 6) + 1));
                laps++;

                if (laps >= 15) {
                    console.clear();
                    clearInterval(intevalDice);

                    console.log(chalk.bold(dice));
                    prompt();
                    gIt(dice, haT());

                    resolve();
                }
            }, 50)
        });
    }

    function gIt(dice, id) {
        console.clear();
        if (player.per + dice >= 6) {
            console.log(chalk.yellow.italic("Incredibly... the rope didn't snap when pulled up from the bottom of the well!"));
            if (player.class.toLowerCase() === 'mage') {
                if (haT() === 1) {
                    let i = haT();
                    it.addItem(i);
                    console.log(chalk.yellow.italic(`You found ${chalk.white.bold(it.itemName(i))}`));
                }
                it.addItem(id);
                console.log(chalk.yellow.italic(`You found ${chalk.white.bold(it.itemName(id))}`));
            } else {
                it.addItem(id);
                console.log(chalk.yellow.italic(`You found ${chalk.white.bold(it.itemName(id))}`));
            }
        } else {
            console.log(chalk.yellow.italic("As expected... the rope didn't even make it halfway down; it snapped! What lay at the bottom of the well remained a mystery..."));
        }
    }

    await rollDice();
}