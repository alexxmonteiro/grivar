import PromptSync from "prompt-sync";
import chalk from "chalk";
import { haT } from "../../!utilities/randomizr.js";
import { combat } from "../../!utilities/combat.js";

const prompt = PromptSync();

export async function fhut_triggerProp() {
        console.clear();
<<<<<<< HEAD
        console.log(chalk.yellow.italic(`The torchlights, however faint, illuminates the cabin entrance; a sense of safety hangs lightly in the air, and a false nostalgia washes over you. There is no apparent danger, yet something feels wrong—you can't quite say what—but the silence of the night breeds unease. Where is the screeching of owls—usually present at night—or the incessant chirping of crickets? Nothing is where it should be; only the sound of your own breathing and the repetitive, artificial crackling of the torches remain. Seized by this strange feeling, you decide to enter the cabin...`));
        prompt();

        console.log(chalk.yellow.italic(`As one inspects the scene, resting upon a table—illuminated by a beeswax candle that gives off a sweet, pleasant scent, and sitting beside a quill and iron-gall ink—a parchment bearing a written message comes into view.\n"To His Royal Majesty,\nIt is with a spirit gripped by the deepest dread that I address this missive to You. The subjects of this province are vanishing mysteriously from their homes, leaving us unable to fathom the cause of such a scourge. Your lands are being emptied.\nWhenever I am compelled to pass near that accursed cavern, I am assailed by terrifying grunts—loud, stifling, and piercing cries that echo from the depths of the rock toward the entrance, like the clamor of an ancient evil.\nI know not if my previous pleas have reached Your eyes, my liege, but I implore You—for the love of the good God—should this letter come to Your august attention, send Your men and take immediate action, for the darkness is closing in upon us..."`));
        prompt();

        console.log(chalk.yellow.italic(`After reading the letter's contents, an alarming crash echoes through the cabin—it sounds as though the door has suddenly slammed shut. Turning around, you see what appears to be a skeleton clad in plate armor and wielding a sword; both the armor and the weapon are rusted, and the figure lacks a helmet. It stands watching you, motionless as a marble statue; the question hanging in the air is how it remains upright, for it possesses neither joints nor flowing blood—it is merely a collection of dry bones, somewhat weathered by time. As you ponder this, it begins to walk slowly toward you; you can sense the pain each step inflicts upon it.`));
=======
        console.log(chalk.yellow.italic(`The torchlights, however faint, illuminates the cabin entrance; a sense of safety hangs lightly in the air, and a false 
nostalgia washes over you. There is no apparent danger, yet something feels wrong—you can't quite say what—but the silence of the 
night breeds unease. Where is the screeching of owls—usually present at night—or the incessant chirping of crickets? Nothing is where 
it should be; only the sound of your own breathing and the repetitive, artificial crackling of the torches remain. Seized by this 
strange feeling, you decide to enter the cabin...`));
        prompt();

        console.log(chalk.yellow.italic(`As one inspects the scene, resting upon a table—illuminated by a beeswax candle that gives off a sweet, pleasant scent, 
and sitting beside a quill and iron-gall ink—a parchment bearing a written message comes into view.
"To His Royal Majesty,
It is with a spirit gripped by the deepest dread that I address this missive to You. The subjects of this province are vanishing 
mysteriously from their homes, leaving us unable to fathom the cause of such a scourge. Your lands are being emptied.
Whenever I am compelled to pass near that accursed cavern, I am assailed by terrifying grunts—loud, stifling, and piercing cries that 
echo from the depths of the rock toward the entrance, like the clamor of an ancient evil.
I know not if my previous pleas have reached Your eyes, my liege, but I implore You—for the love of the good God—should this letter 
come to Your august attention, send Your men and take immediate action, for the darkness is closing in upon us..."`));
        prompt();

        console.log(chalk.yellow.italic(`After reading the letter's contents, an alarming crash echoes through the cabin—it sounds as though the door has suddenly 
slammed shut. Turning around, you see what appears to be a skeleton clad in plate armor and wielding a sword; both the armor and the 
weapon are rusted, and the figure lacks a helmet. It stands watching you, motionless as a marble statue; the question hanging in the 
air is how it remains upright, for it possesses neither joints nor flowing blood—it is merely a collection of dry bones, somewhat 
weathered by time. As you ponder this, it begins to walk slowly toward you; you can sense the pain each step inflicts upon it.`));
>>>>>>> 14a6a01 (grivar 1.1.1)
        prompt();

        console.log(chalk.yellow.bold(`SUDDENLY`) + chalk.yellow.italic(`, it lunges rapidly in your direction, ready to strike...`));
        prompt();

        await combat(1);
}

export async function shut_triggerProp() {
<<<<<<< HEAD
        console.log(chalk.yellow.italic(`As you approach the cabin door, you get a bad feeling—something is terribly wrong. One of the torches is lit, casting a murky glow over the left side of the doorway, while the other lies on the ground; a sudden shiver running through your body intensifies this sense of dread. You freeze involuntarily for a few seconds, until a surge of mixed courage and impulsiveness drives you to step inside the quarters without looking back...`));
        prompt();

        console.log(chalk.yellow.italic(`The faint outside light affords you a limited view of the interior; it is merely a room—there is nothing inside, completely stripped of meaning. You question the purpose of an empty dwelling until...`));
=======
        console.log(chalk.yellow.italic(`As you approach the cabin door, you get a bad feeling—something is terribly wrong. One of the torches is lit, 
casting a murky glow over the left side of the doorway, while the other lies on the ground; a sudden shiver running through your 
body intensifies this sense of dread. You freeze involuntarily for a few seconds, until a surge of mixed courage and impulsiveness 
drives you to step inside the quarters without looking back...`));
        prompt();

        console.log(chalk.yellow.italic(`The faint outside light affords you a limited view of the interior; it is merely a room—there is nothing inside, 
completely stripped of meaning. You question the purpose of an empty dwelling until...`));
>>>>>>> 14a6a01 (grivar 1.1.1)
        prompt();

        console.log(chalk.yellow.bold(`from one of the dark corners`) + chalk.yellow.italic(`, you see something approaching swiftly—it looks hostile...`));
        prompt();
<<<<<<< HEAD

        await combat(haT())
}

export async function cave_hut() {
<<<<<<< HEAD
        console.log(chalk.yellow.italic(`You force the wooden door in an attempt to enter the cabin; despite the heavy pressure, the door won't budge—it is as if something inside is blocking the way, or perhaps the cabin isn't actually a cabin at all. As a whirlwind of thoughts races through your mind, you hear footsteps behind you; you spin around quickly, only to find a skeleton charging furiously toward you. It manages to land a powerful blow—you narrowly escape, thanks to your blessed reflexes! It is out for your head!`));
=======
        console.log(chalk.yellow.italic(`You force the wooden door in an attempt to enter the cabin; despite the heavy pressure, the door won't budge—it is 
as if something inside is blocking the way, or perhaps the cabin isn't actually a cabin at all. As a whirlwind of thoughts races through
your mind, you hear footsteps behind you; you spin around quickly, only to find a skeleton charging furiously toward you. It manages to 
land a powerful blow—you narrowly escape, thanks to your blessed reflexes! It is out for your head!`));
>>>>>>> 51953b9 (1.2.0)
        prompt();

        await combat(1);
=======
        
        await combat(haT())
>>>>>>> 14a6a01 (grivar 1.1.1)
}