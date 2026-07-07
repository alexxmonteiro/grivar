import PromptSync from 'prompt-sync';
import chalk from 'chalk';

const prompt = PromptSync();
export default function mainMenu(t){
    let n;
    let b;
    if(t == 1){ //Main menu english version
        b = 0;
        console.log(chalk.yellow.bold("G R I V A R"));
        console.log("-----------");
        console.log(chalk.white.italic("PLAY"));
        console.log(chalk.white.italic("QUIT"));
        n = Number(prompt("Select option (1 - PLAY, 2 - QUIT): " ));
        while(n < 1 || n > 2){
            n = Number(prompt(chalk.red.bold("ERROR, select a option (1 - PLAY, 2 - QUIT): ")));
        }
        console.clear();
        if(n == 1){
            console.log(chalk.yellow.bold("G R I V A R"));
            console.log("-----------");
            console.log(chalk.yellow.italic("PLAY <"));
            console.log(chalk.white.italic("QUIT"));
            prompt();
            console.clear();
            b = 1;
            return b = 1;
        }else if(n == 2){
            console.log(chalk.yellow.bold("G R I V A R"));
            console.log("-----------");
            console.log(chalk.white.italic("PLAY"));
            console.log(chalk.yellow.italic("QUIT <"));
            prompt();
            console.clear();
            return;
        }
    }else{ //Main menu portuguese version
        b = 0;
        console.log(chalk.yellow.bold("G R I V A R"));
        console.log("-----------");
        console.log(chalk.white.italic("JOGAR"));
        console.log(chalk.white.italic("SAIR"));
        n = Number(prompt("Selecione uma opção (1 - JOGAR, 2 - SAIR): " ));
        while(n < 1 || n > 2){
            n = Number(prompt(chalk.red.bold("ERRO, selecione uma opção (1 - JOGAR, 2 - SAIR): ")));
        }
        console.clear();
        if(n == 1){
            console.log(chalk.yellow.bold("G R I V A R"));
            console.log("-----------");
            console.log(chalk.yellow.italic("JOGAR <"));
            console.log(chalk.white.italic("SAIR"));
            prompt();
            console.clear();
            b = 1;
            return b = 1;
        }else if(n == 2){
            console.log(chalk.yellow.bold("G R I V A R"));
            console.log("-----------");
            console.log(chalk.white.italic("JOGAR"));
            console.log(chalk.yellow.italic("SAIR <"));
            prompt();
            console.clear();
            return;
        }
    }
}