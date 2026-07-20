import chalk from 'chalk';
import PromptSync from 'prompt-sync';
import { runGameBr } from '../pt-br/funnel-br.js';
import { runGameUs } from '../en-us/funnel-us.js';

const prompt = PromptSync();

console.log(chalk.yellow.italic("1 - EN-US\n"+"2 - PT-BR\n"));
var translation = Number(prompt());
while(![1, 2].includes(translation)){
    console.log(chalk.red.bold("ERROR:\n"+"1 - EN-US\n"+"2 - PT-BR\n"));
    translation = Number(prompt());
}
console.clear();

if(translation === 1){
    runGameUs();
}else if(translation === 2){
    runGameBr();
}