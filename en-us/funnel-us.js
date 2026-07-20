<<<<<<< HEAD
import { actOne } from "./!cutscenes/cts.js";
import { the_cave } from "./!maps/the_cave.js";
=======
>>>>>>> 14a6a01 (grivar 1.1.1)
import { the_way } from "./!maps/the_way.js";
import mainMenu from "./!utilities/menu.js";
import { characterSelect } from "./!utilities/player.js";

<<<<<<< HEAD
export async function runGameUs() {
=======
export function runGameUs() {
>>>>>>> 14a6a01 (grivar 1.1.1)
    let b = mainMenu();

    if (b === 1) {
        characterSelect();
<<<<<<< HEAD
        actOne();
        await the_way();
        await the_cave();
=======
        the_way();
>>>>>>> 14a6a01 (grivar 1.1.1)
    }
}
