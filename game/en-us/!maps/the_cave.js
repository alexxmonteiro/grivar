import PromptSync from "prompt-sync";
import chalk from "chalk";
import { caveTriggers, triggerItem, bossFight, enmOnGrass } from "../!cutscenes/cts.js";
import { mapSelect } from "../!utilities/randomizr.js";
import { the_cave_tc } from "../!maps/title_cards.js";
import { cave_hut } from "../!maps/@props/prop_huts.js";
import { well_triggerProp } from "../!maps/@props/prop_well.js"

const prompt = PromptSync();

class Requires{
    constructor(){}

    chooseMap(){
        switch (mapSelect()) {
            case 1: return mapOne; 
            case 2: return mapTwo; 
            case 3: return mapThr; 
        }
    }

    move(direction){
        let vMov = player.line;
        let hMov = player.colunm;

        switch(direction.toLowerCase()) {
            case 'n': vMov--; break;
            case 's': vMov++; break;
            case 'w': hMov--; break;
            case 'e': hMov++; break;
            default: return;
        }

        if(vMov >= 0 && vMov < map.length && hMov >= 0 && hMov < map[0].length){
            if(map[vMov][hMov] >= 1){
                let targetTile = map[vMov][hMov];

                map[player.line][player.colunm] = 1;
                player.line = vMov; 
                player.colunm = hMov;
                map[player.line][player.colunm] = 2; 

                return targetTile;
            }
        }
    }

    enableOptions(){
        let option = [];

        if(player.line-1 >= 0 && map[player.line - 1][player.colunm] >= 1){
            option.push('N');
        }

        if(player.line+1 < map.length && map[player.line + 1][player.colunm] >= 1){
            option.push('S');
        }

        if(player.colunm-1 >= 0 && map[player.line][player.colunm - 1] >= 1){
            option.push('W');
        }

        if(player.colunm+1 < map.length && map[player.line][player.colunm + 1] >= 1){
            option.push('E');
        }

        return option;
    }

    activeTrigger(playerTile){
        if (playerTile >= 3 && playerTile <= 7) {
            let triggerList = caveTriggers(); 
            let idTrigger = playerTile - 2; 

            if (triggerList[idTrigger]) {
                console.clear(); 
                console.log(chalk.yellow.italic(triggerList[idTrigger]));
            }
        }
    }

    pickUpItem(playerTile){
        if (playerTile === 8 || playerTile === 10) {
            let idItem;
    
            if(playerTile === 8){
                idItem = 1;
            }else if(playerTile === 10){
                idItem = 2;
            }
    
            console.clear();
            triggerItem(idItem);
        }

    }

    async well_Prop(playerTile){
        if(playerTile === 9){
            await well_triggerProp(); 
        }
    }

    async huts_Prop(playerTile){
        if(playerTile === 11){
            await cave_hut();
        }
    }

    async bossFight(playerTile){
        if(playerTile === 12){
            await bossFight();

            return true;
        }
    }

    async enm(playerTile) {
        if(playerTile === 13){
            await enmOnGrass();
        }
    }
}
const requires = new Requires();

let mapOne = [
    [0,0,1,6,11,0,12,0,0,0,0,0,0],
    [0,0,1,0,0,0,7,0,0,0,0,0,0],
    [0,0,4,0,0,0,1,1,1,1,13,0,0],
    [0,1,1,1,1,1,1,0,0,0,10,0,0],
    [0,1,0,0,0,0,1,0,0,0,0,0,0],
    [0,1,1,1,1,1,13,0,0,10,0,0,0],
    [0,1,0,0,0,0,0,0,8,1,0,0,0],
    [0,1,0,0,0,0,0,0,0,1,5,9,0],
    [0,1,1,1,1,1,1,0,0,1,0,0,0],
    [0,0,0,0,0,0,1,0,0,1,0,0,0],
    [0,0,0,0,0,0,3,1,1,1,0,0,0],
    [0,0,0,0,0,0,2,0,0,0,0,0,0]
];

let mapTwo = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,13,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,7,12,0],
    [0,1,0,0,0,0,0,0,0,1,0,0,0],
    [0,1,0,1,6,11,0,0,0,10,0,0,0],
    [0,1,0,1,0,0,10,0,0,0,0,0,0],
    [0,1,0,4,0,0,1,0,0,0,0,0,0],
    [0,1,1,1,13,1,1,0,0,9,0,0,0],
    [0,1,0,0,0,0,0,0,0,5,0,0,0],
    [0,1,0,0,0,0,0,0,0,1,0,0,0],
    [0,1,1,1,1,1,3,1,1,1,1,8,0],
    [0,0,0,0,0,0,2,0,0,0,0,0,0]
];

let mapThr = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,7,12,0],
    [0,1,0,0,0,0,1,0,0,0,0,0,0],
    [0,1,0,0,0,0,1,4,1,1,6,11,0],
    [0,1,0,0,0,0,1,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,13,10,0,0,0,0],
    [0,1,0,5,0,0,0,0,0,0,0,0,0],
    [0,1,0,9,0,0,0,0,0,0,10,0,0],
    [0,1,0,0,0,0,0,0,0,0,1,0,0],
    [0,1,1,1,1,1,3,1,1,1,13,8,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,2,0,0,0,0,0,0]
];

let map = requires.chooseMap();
let player = {line: 11, colunm: 6};

export async function the_cave() {
    process.stdout.write('\x1Bc');
    the_cave_tc();
    while (true) {
        let input;
        let end = false;
        let options = requires.enableOptions();

        input = prompt(chalk.white.italic("Where you going? ")+chalk.yellow.bold(`(${options})`));
        console.clear();
        
        let playerTile = requires.move(input); 

        requires.activeTrigger(playerTile);
        requires.pickUpItem(playerTile);
        await requires.well_Prop(playerTile); 
        await requires.huts_Prop(playerTile);
        end = await requires.bossFight(playerTile);
        await requires.enm(playerTile);
        if(end === true){
            break;
        }
    }
}