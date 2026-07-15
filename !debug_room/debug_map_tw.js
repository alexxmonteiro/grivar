import PromptSync from "prompt-sync";
import chalk from "chalk";
import { triggerItem, triggers } from "../!cutscenes/cts.js";
import { mapSelect } from "../!utilities/randomizr.js";
import { well_triggerProp } from "../!maps/@props/prop_well.js";
import { fhut_triggerProp, shut_triggerProp } from "../!maps/@props/prop_huts.js";

const prompt = PromptSync();

let mapOne = [
    [0,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,6,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,10,0,1,0,0,0,0,0,0],
    [0,0,0,0,1,0,1,0,0,0,0,0,0],
    [0,12,1,1,1,1,5,0,0,8,0,0,0],
    [0,0,0,1,0,0,1,0,0,1,0,0,0],
    [0,0,0,9,0,0,4,1,1,1,1,11,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,3,0,0,0,0,0,0],
    [0,0,0,0,0,0,2,0,0,0,0,0,0]
];

let mapTwo = [
    [0,0,12,0,0,0,1,0,0,0,0,0,0],
    [0,0,1,0,0,0,7,1,1,8,0,0,0],
    [0,0,6,0,0,0,1,0,0,0,0,0,0],
    [0,0,1,0,0,0,1,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,10,0,0],
    [0,0,0,0,0,0,1,0,0,0,1,0,0],
    [0,0,0,0,0,0,4,1,1,1,1,11,0],
    [0,0,0,0,0,0,1,0,1,0,0,0,0],
    [0,0,0,0,0,0,1,0,9,0,0,0,0],
    [0,0,0,0,0,0,3,0,0,0,0,0,0],
    [0,0,0,0,0,0,2,0,0,0,0,0,0]
];

let mapThr = [
    [0,0,0,0,0,0,1,0,0,0,0,12,0],
    [0,0,0,0,0,0,7,0,0,0,0,1,0],
    [0,8,1,1,1,1,1,0,0,0,0,6,0],
    [0,0,0,1,0,0,1,0,0,0,0,1,0],
    [0,0,0,9,0,0,1,0,0,0,0,1,0],
    [0,0,0,0,0,0,1,1,1,1,1,10,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,11,1,1,1,5,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,3,0,0,0,0,0,0],
    [0,0,0,0,0,0,2,0,0,0,0,0,0]
];

function chooseMap(){
    switch (mapSelect) {
        case 1: return mapOne; break;
        case 2: return mapTwo; break;
        case 3: return mapThr; break;
    }
}
let map = chooseMap();

let player = {line: 11, colunm: 6};
let tiles = {
    0: " ",
    1: "|",
    2: "*",
    3: "!",
    4: "@",
    5: "#",
    6: "$",
    7: "%",
    8: "hw",
    9: "p",
    10: "pt",
    11: "-",
    12: "="
};

function drawMap(){
    console.clear();
    for(let i = 0; i < map.length; i++){
        let draw = "";
        for(let j = 0; j < map[i].length; j++){
            draw += tiles[map[i][j]];
        }
        console.log(draw);
    }
}

function move(direction){
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
            let blocoDestino = map[vMov][hMov];

            map[player.line][player.colunm] = 1;
            player.line = vMov; 
            player.colunm = hMov;
            map[player.line][player.colunm] = 2; 

            return blocoDestino;
        }
    }
}

function enableOptions(){
    let option = [];

    if(player.line-1 >= 0 && map[player.line - 1][player.colunm] >= 1){
        option.push('n');
    }

    if(player.line+1 < map.length && map[player.line + 1][player.colunm] >= 1){
        option.push('s');
    }

    if(player.colunm-1 >= 0 && map[player.line][player.colunm - 1] >= 1){
        option.push('w');
    }

    if(player.colunm+1 < map.length && map[player.line][player.colunm + 1] >= 1){
        option.push('e');
    }

    return option;
}

function activeTrigger(blocoAtual){
    if (blocoAtual >= 3 && blocoAtual <= 7) {
        let listaTriggers = triggers(); 
        let idTrigger = blocoAtual - 2; 

        if (listaTriggers[idTrigger]) {
            console.clear(); 
            console.log(chalk.yellow(listaTriggers[idTrigger]));
            prompt();
        }
    }
}

function desc(blocoAtual){
    if (blocoAtual == 8 || blocoAtual == 10) {
        let idItem;

        if(blocoAtual === 8){
            idItem = 1;
        }else if(blocoAtual === 10){
            idItem = 2;
        }

        console.clear();
        triggerItem(idItem);
        prompt();
    }
}

async function triggerwell(blocoAtual){
     if (blocoAtual == 9) {
        await well_triggerProp();
    }
}

async function triggerhutl(blocoAtual) {
    if(blocoAtual == 11){
        await lhut_triggerProp();
    }
}

async function triggerhutr(blocoAtual) {
    if(blocoAtual == 12){
        await rhut_triggerProp();
    }
}

async function game() {
    while (true) {
        drawMap();

        let options = enableOptions();
        
        let input = prompt(`Where you going? (${options}): `);

        let blocoPisado = move(input); 

        activeTrigger(blocoPisado);
        desc(blocoPisado);
        await triggerwell(blocoPisado);
        await triggerhutl(blocoPisado);
        await triggerhutr(blocoPisado);
    }
}
game();