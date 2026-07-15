import PromptSync from 'prompt-sync';
import chalk from 'chalk';
import { item } from '../!utilities/inventory.js';

const prompt = PromptSync();

export function actOne(t){
    if(t == 1){ //Act one english version
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
    } else{ //Act one portuguese version
        console.log(chalk.yellow.italic(`12 de março de 1375, 13:00.`)); 
        prompt();
        console.log(chalk.yellow.italic(`Na condição de mão direita do rei, você foi enviado 
junto a um pequeno contingente de homens em uma expedição para investigar uma caverna no pé de
uma montanha, camponeses têm desaparecido em seu entorno recentemente, em certo ponto do caminho 
para a caverna, sua caravana foi atacada, você não viu o que era pois estava no compartimento de 
carga, mas sentiu o impacto pesado da carroça ao colidir com o solo e, então, perdeu a consciência.`));
        prompt();
        console.log(chalk.yellow.italic(`Você acorda desnorteado, seu corpo dói, é como se tivesse 
sido pisoteado por um cavalo, ao sair dos destroços, o aroma de grama esmagada se faz presente, um
gosto de sangue, amargo como ferrugem, preenche sua boca, a poucos metros é possível ver uma cabana 
arcaica, parece estar abandonada ali já fazem 20 anos, sem escolha você decide se abrigar nela, 
esperando que assim tenha um abrigo temporário, pelo menos enquanto se recupera.`));
        prompt();
        console.log(chalk.yellow.italic(`Ao adentrar o local, é perceptível o desgaste do tempo, as 
ripas de madeira estalam com o vento, o cheiro de madeira molhada percorre suas narinas, o fato 
dessa estrutura ainda estar de pé é um mistério, em um canto menos castigado você se escora, 
improvisa bandagens feitas de trapos velhos do revestimento de pano do compartimento de carga 
que você pegou dos restos do que um dia foi uma carroça, você acabou pegando no sono.`));
        prompt();
        console.log(chalk.yellow.italic(`Você desperta, meio estonteado, não tem noção de quanto tempo se passou desde 
que dormiu, será que foram dias, semanas? Pelo menos se sente completamente restaurado, ao sair da 
cabana, não existem carroças, nem cavalos, nem pessoas, não existe nada onde deveria haver 
destroços, você olha para o final da estrada e percebe que ao longe existe uma caverna, ela está ao 
pé de uma montanha, essa era a caverna a qual estava atrás! Você ficou completamente sozinho, 
ninguém veio te procurar, o reino fica muito distante, além disso, tem algumas cabanas próximas, 
será que elas estão habitadas? Explorar é sua única escolha!`));
        prompt();
        console.clear();
    }
}

export function triggers(){
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

export function triggerItem(id){
        let it = item;

        it.addItem(id);

        console.log(chalk.yellow.italic(`You found ${chalk.white.bold(it.itemName(id))}`));
}
