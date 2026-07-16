import { the_way } from "./!maps/the_way.js";
import mainMenu from "./!utilities/menu.js";
import { characterSelect } from "./!utilities/player.js";

export function runGameBr() {
    let b = mainMenu();

    if (b === 1) {
        characterSelect();
        the_way();
    }
}