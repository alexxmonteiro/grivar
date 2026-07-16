import PromptSync from 'prompt-sync';
import chalk from 'chalk';

const prompt = PromptSync();
export default function mainMenu() {
    let n;
    console.log(chalk.yellow.bold("G R I V A R"));
    console.log("-----------");
    console.log(chalk.white.italic("JOGAR"));
    console.log(chalk.white.italic("SAIR"));
    n = Number(prompt("Selecione uma opção (1 - JOGAR, 2 - SAIR): "));
    while (n < 1 || n > 2) {
        n = Number(prompt(chalk.red.bold("ERRO: selecione uma opção (1 - JOGAR, 2 - SAIR): ")));
    }
    console.clear();
    if (n == 1) {
        console.log(chalk.yellow.bold("G R I V A R"));
        console.log("-----------");
        console.log(chalk.yellow.italic("JOGAR <"));
        console.log(chalk.white.italic("SAIR"));
        prompt();
        console.clear();
        return 1;
    } else if (n == 2) {
        console.log(chalk.yellow.bold("G R I V A R"));
        console.log("-----------");
        console.log(chalk.white.italic("JOGAR"));
        console.log(chalk.yellow.italic("SAIR <"));
        prompt();
        console.clear();
        return;
    }
}
