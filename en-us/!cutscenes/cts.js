import PromptSync from 'prompt-sync';
import chalk from 'chalk';
import { item } from '../!utilities/inventory.js';
import { player } from '../!utilities/player.js';
import { d6, haT } from '../!utilities/randomizr.js';
import { combat } from '../!utilities/combat.js';

const prompt = PromptSync();

export function actOne() {
        console.log(chalk.yellow.italic(`March 12, 1375, 1:00 PM.`));
        prompt();
        console.log(chalk.yellow.italic(`As the king's right-hand man, you were sent with a small 
contingent of men to investigate a cave at the foot of a mountain—peasants had been disappearing
in the area recently. At one point on the journey, your caravan was attacked; you didn't see 
the attacker because you were in the cargo hold, but felt the wagon's heavy impact as it collided 
with the ground, and then lost consciousness.`));
        prompt();
        console.log(chalk.yellow.italic(`You wake up disoriented; your body aches as if you’d been 
trampled by a horse. As you crawl out of the wreckage, the scent of crushed grass fills the 
air, and the bitter, metallic taste of blood—like rust—lingers in your mouth. A few meters 
away, you spot a primitive cabin; it looks as though it has been abandoned for twenty years.
With no other choice, you decide to take shelter there, hoping for a temporary refuge while you 
recover.`));
        prompt();
        console.log(chalk.yellow.italic(`Upon entering, the ravages of time are evident: wooden slats 
creak in the wind, and the smell of wet wood fills your nostrils. It is a mystery how the 
structure is still standing. You lean against a wall in a relatively intact corner and 
improvise bandages from old rags—scraps of the cargo hold's lining salvaged from the remains of 
the wagon—before eventually drifting off to sleep.`));
        prompt();
        console.log(chalk.yellow.italic(`You wake up, still somewhat dazed, with no idea how much time 
has passed—days? weeks? At least you feel fully recovered. Stepping out of the cabin, you find 
no wagons, horses, or people; there is nothing left where the wreckage should have been. 
Looking down the road, you spot a cave in the distance at the mountain's base—the very cave 
you had set out to find. You are completely alone; no one came looking for you, and the kingdom 
is far away. However, there are a few other cabins nearby—could they be inhabited? Exploring 
is your only choice!`));
        prompt();
        console.clear();
}

export function triggers() {
        let trg;

        trg = {
                1: `You look around; the dense forest seems to almost completely fill your field of vision, 
save for the packed-earth path beneath your feet, which slices through the woods like a sword, 
dividing them into two perfectly symmetrical halves. In the distance, you can make out cabins 
standing out mysteriously amidst the vast expanse of trees—structures positioned there as if they 
had been waiting for your arrival.`,
                2: `To your left, you see a cabin; it appears well-preserved, despite the deep gouges 
carved into the wall to the right of the door. Torches burn like the embers of a freshly lit 
bonfire, held upright in wood-and-iron structures that resemble floor-standing candelabras, casting 
a faint light on the cabin's entrance. Do people live in this structure?`,
                3: `To your right, you can see another hut—one that strangely looks like an almost perfect 
copy of the previous one, except for the fact that one of the torches lies on the ground, as if 
something had shoved it aside with deadly hatred.`,
                4: `Ahead of you, another hut is visible; strangely, it looks like an almost perfect copy 
of the previous one, except that one of the torches lies on the ground, as if something had shoved 
it aside with deadly hatred.`,
                5: `A few meters ahead, you see the cave—the reason you are here! Its entrance looms 
imposingly against the mountain. A sinister pitch-blackness stretches into its depths like a 
macabre veil; the tension of the darkness is broken only by faint torches spaced evenly along the 
walls further inside. Should you really go in?`
        };

        return trg;
}

export function caveTriggers() {
        let trg;

        trg = {
                1: `You descended a long flight of stairs; minutes seemed to have passed since you 
began the descent. Upon reaching the bottom, you realized that what had appeared from the outside 
to be the end of the cave was actually just a wall in one of the corridors of a gallery branching 
out into various smaller passages...`,
                2: `You squeeze through a narrow passage of stone worn down by natural erosion. 
The rocks scrape aggressively against your chest, the friction causing mounting discomfort; the 
lack of space is brutally suffocating, and your throat constricts from constantly inhaling the 
ancient dust that once rested undisturbed upon the rock—now stirred up by the passage of an outsider 
who does not belong to these lands. The remaining particles hover maliciously over your eyes, which 
now grow irritated—a harsh punishment for your audacity!`,
                3: `Ahead, you spot what appears to be a well—one that seems out of place yet identical 
to the one on the surface, if not a perfect copy. It is strange—not the fact that a well exists in such 
a deep place, but rather an ambiguous sensation beginning to take hold in your amygdala.`,
                4: `Torches come into view, and another cabin reveals itself, standing out against the 
darkness. Why? A dwelling shouldn't be located here. It is definitely a copy of the previous two.`,
                5: `You are repulsed by what you see; it is a creature that can only be described as 
a cathedral rose window made entirely of human skin (completely detached from the carcass), exposed 
and pulsating muscles, and strangely positioned tendons. The thing is blasphemous! Luckily, it hasn't 
spotted you yet.`
        };

        return trg;
}

export function triggerItem(id) {
        let it = item;

        if (player.class.toLowerCase() === 'mage') {
                let i;
                if (d6() > 5) {
                        i = haT();
                        it.addItem(i);
                        console.log(chalk.yellow.italic(`You found ${chalk.white.bold(it.itemName(i))}`));
                        prompt(chalk.yellow.bold("As you picked up the item, a glowing object mystically revealed itself, as if it had been waiting for your arrival..."));
                }
                i = haT();
                it.addItem(i);
                console.log(chalk.yellow.italic(`You found ${chalk.white.bold(it.itemName(i))}`));
        } else {
                it.addItem(id);
                console.log(chalk.yellow.italic(`You found ${chalk.white.bold(it.itemName(id))}`));
        }
}

export async function enmOnGrass() {
        prompt(chalk.yellow.italic(`Out of the corner of your eye, you see a shadow slowly approaching, trying to catch you off guard; you spin around quickly...`));
        await combat(haT());
}

export async function bossFight() {
        prompt(chalk.yellow.italic(`You slowly approach the creature, attempting a cowardly attack from behind; mounting anxiety grips 
you with every step, your heart pounding so violently it feels as though the pressure might make it implode. The closer you get, the 
stronger the stench of rot becomes—the smell of what appear to be multiple corpses.\n`));
        prompt(chalk.yellow.italic(`The grunts the creature emits fill you with dread; they are sounds of pain—animalistic. Thoughts 
race through your mind: what if you fail to land the blow? What if... what if... Your superficial temporal artery throbs in agony. 
You advance as slowly as a lion passively watching its prey—simply waiting for the perfect moment to strike.\n`));
        prompt(chalk.yellow.italic(`The closer you get to the monster, the larger it appears; its body towers four meters high—imposing 
and terrifying. Suddenly, your intuition tells you the moment to strike has arrived; you brace yourself and lunge at the being. Just as 
your attack—which seemed so sure, so precise—nears its spine, the creature becomes aware of a presence so insignificant it had gone 
unnoticed until now: YOU.\n`));
        prompt(chalk.yellow.italic(`With a single turn of its head, the aberration reveals arms made of a tangled mass of muscle and 
tendon—limbs that had been hidden beneath that decaying skin all along. They are countless—impossible to tally, even for Leonardo Fibonacci. 
Four of those arms lash out at you with such force that the first thing you see afterward is the rocky ground below; you aren't dead, 
though perhaps you should be.\n`));
        prompt(chalk.yellow.italic(`The creature turns its head—with a sharp crack of its neck... ...which had long been hidden; the 
sight is horrifying—you have never seen anything like it before. It can only be described thus: "If Being *is*, it must possess a 
nature entirely separate from becoming and motion. For if we say that what changes *is*, we are uniting two contradictory things. That 
which truly *is* remains identical to itself, in the same state. If we allow Being to change, it becomes non-being the very next 
instant.".\n`));
        prompt(chalk.yellow.italic(`You are gripped by panic; nothing could have prepared you for what now stares back at you—deeply, 
never once looking away.\n`));
        prompt(chalk.yellow.bold(`FIGHT FOR YOUR LIFE!\n`));

        await combat(3);

        process.stdout.write('\x1Bc');
        prompt(chalk.yellow.italic(`The creature collapses to the ground, lifeless; its body convulses as it releases the last spasms 
of life. You feel relief wash over your entire body; it seems that, at last, it is all over! The sense of fulfillment is so 
overwhelming that you faint from exhaustion.\n`));
        prompt(chalk.yellow.italic(`When you wake up, you find yourself sitting outside the starting cabin. It is already morning—a 
warm campfire keeps you cozy. Looking toward the distant mountain where a cave once stood, you see only vegetation now. The wind blows, 
and the grassy plain shimmers with an emerald green; a sense of peace washes over you.\n`));
        prompt(chalk.yellow.italic(`A few contemplative minutes pass, until a sudden thought crosses your mind: "How will I return to my 
kingdom?" You look around, hoping to find something to help you. There is a large leather bag leaning against the wall; it 
appears completely full. Full of hope, you look inside—blessed be your luck.\n`));
        prompt(chalk.yellow.italic(`The bag is packed with provisions that would easily last four seasons. Furthermore, there is a valuable 
prize: the creature's head. This will be your trump card—the very thing you will show the king when you are received in the kingdom.\n`));
        prompt(chalk.yellow.italic(`Then, you close your pack, strap it to your back, and extinguish the gentle fire that had offered you 
warmth. You cast a final, parting glance at the place that nearly claimed your life, turn around, and head toward the kingdom that 
awaits you.\n`));
}