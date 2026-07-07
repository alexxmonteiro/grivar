import chalk from 'chalk';
import PromptSync from 'prompt-sync';
import Player from '../!utilities/player.js'
import characterSelect from '../!utilities/player.js';
import mainMenu from '../!utilities/menu.js' 
import { actOne } from '../!cutscenes/cts.js';

const prompt = PromptSync();

console.log(chalk.yellow.italic("1 - EN-US\n"+"2 - PT-BR\n"));
var translation = Number(prompt());
while(translation < 1 || translation > 2){
    console.log(chalk.red.bold("ERROR:\n"+"1 - EN-US\n"+"2 - PT-BR\n"));
    translation = Number(prompt());
}
console.clear();

const menu = mainMenu(translation);

if(menu == 1){
    characterSelect(translation);
    actOne(translation);
} 