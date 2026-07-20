import { actOne } from "./!cutscenes/cts.js";
import { the_cave } from "./!maps/the_cave.js";
import { the_way } from "./!maps/the_way.js";
import mainMenu from "./!utilities/menu.js";
import { characterSelect } from "./!utilities/player.js";

export async function runGameBr() {
    let b = mainMenu();

    if (b === 1) {
        characterSelect();
        actOne();
        await the_way();
        await the_cave();
    }
}