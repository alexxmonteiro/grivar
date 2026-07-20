import PromptSync from 'prompt-sync';
import chalk from 'chalk';

const prompt = PromptSync();
export default function mainMenu() {
    let n;
    console.log(chalk.yellow.bold("G R I V A R"));
    console.log("-----------");
    console.log(chalk.white.italic("PLAY"));
    console.log(chalk.white.italic("QUIT"));
    n = Number(prompt("Select option (1 - PLAY, 2 - QUIT): "));
    while (![1, 2].includes(n)) {
        n = Number(prompt(chalk.red.bold("ERROR, select a option (1 - PLAY, 2 - QUIT): ")));
    }
    console.clear();
    if (n == 1) {
        console.log(chalk.yellow.bold("G R I V A R"));
        console.log("-----------");
        console.log(chalk.yellow.italic("PLAY <"));
        console.log(chalk.white.italic("QUIT"));
        prompt();
        console.clear();
        return 1;
    } else if (n == 2) {
        console.log(chalk.yellow.bold("G R I V A R"));
        console.log("-----------");
        console.log(chalk.white.italic("PLAY"));
        console.log(chalk.yellow.italic("QUIT <"));
        prompt();
        console.clear();
        return;
    }
}