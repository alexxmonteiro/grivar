import PromptSync from 'prompt-sync';
import chalk from 'chalk';
import { item } from '../!utilities/inventory.js';
<<<<<<< HEAD
import { haT, d6 } from '../!utilities/randomizr.js';
import { player } from '../!utilities/player.js';
import { combat } from '../!utilities/combat.js';
=======
>>>>>>> 14a6a01 (grivar 1.1.1)

const prompt = PromptSync();

export function actOne() {
        console.log(chalk.yellow.italic(`12 de março de 1375, 13:00.`));
        prompt();
<<<<<<< HEAD
        console.log(chalk.yellow.italic(`Na condição de mão direita do rei, você foi enviado junto a um pequeno contingente de homens em uma expedição para investigar uma caverna no pé de uma montanha, camponeses têm desaparecido em seu entorno recentemente, em certo ponto do caminho para a caverna, sua caravana foi atacada, você não viu o que era pois estava no compartimento de carga, mas sentiu o impacto pesado da carroça ao colidir com o solo e, então, perdeu a consciência.`));
        prompt();
        console.log(chalk.yellow.italic(`Você acorda desnorteado, seu corpo dói, é como se tivesse sido pisoteado por um cavalo, ao sair dos destroços, o aroma de grama esmagada se faz presente, um gosto de sangue, amargo como ferrugem, preenche sua boca, a poucos metros é possível ver uma cabana arcaica, parece estar abandonada ali já fazem 20 anos, sem escolha você decide se abrigar nela, esperando que assim tenha um abrigo temporário, pelo menos enquanto se recupera.`));
        prompt();
        console.log(chalk.yellow.italic(`Ao adentrar o local, é perceptível o desgaste do tempo, as ripas de madeira estalam com o vento, o cheiro de madeira molhada percorre suas narinas, o fato dessa estrutura ainda estar de pé é um mistério, em um canto menos castigado você se escora, improvisa bandagens feitas de trapos velhos do revestimento de pano do compartimento de carga que você pegou dos restos do que um dia foi uma carroça, você acabou pegando no sono.`));
        prompt();
        console.log(chalk.yellow.italic(`Você desperta, meio estonteado, não tem noção de quanto tempo se passou desde que dormiu, será que foram dias, semanas? Pelo menos se sente completamente restaurado, ao sair da cabana, não existem carroças, nem cavalos, nem pessoas, não existe nada onde deveria haver destroços, você olha para o final da estrada e percebe que ao longe existe uma caverna, ela está ao pé de uma montanha, essa era a caverna a qual estava atrás! Você ficou completamente sozinho, ninguém veio te procurar, o reino fica muito distante, além disso, tem algumas cabanas próximas, será que elas estão habitadas?`));
=======
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
>>>>>>> 14a6a01 (grivar 1.1.1)
        prompt();
        console.clear();
}

export function triggers() {
        let trg;

        trg = {
<<<<<<< HEAD
                1: `Você olha ao redor, pode se dizer que a floresta densa cobre quase completamente seu campo de visão, a não ser pelo caminho de terra batida ao qual caminha sobre, que corta como uma espada a floresta em duas metades perfeitamente simétricas. Ao longe é possível ver cabanas, essas que se destacam misteriosamente entre a vastidão finita de árvores, elas estão instaladas lá como se já estivessem ao seu aguardo.`,
                2: `Ao seu lado esquerdo você vê uma cabana, ela aparenta estar conservada, mesmo com as ranhuras profundas gravadas na parede do lado direito da porta. Tochas queimam como as brasas de uma fogueira recém acesa, estas se posicionam de pé em estruturas de madeira e ferro que lembram candelabros de chão, projetando uma luz tênue sobre a entrada da cabana. Será que pessoas residem nessa construção?`,
                3: `Ao seu lado direito é possível observar outra cabana, que estranhamente parece uma cópia quase perfeita da cabana anterior, a não ser pelo fato de que uma das tochas está no chão, como se algo tivesse a empurrado com um ódio mortal.`,
                4: `À sua frente, avista-se outra cabana; estranhamente, ela parece uma cópia quase perfeita da anterior, exceto pelo fato de que uma das tochas está caída no chão, como se algo a tivesse empurrado para o lado com um ódio mortal.`,
                5: `Metros à frente, você vê a caverna, o motivo de estar aqui! Sua entrada cresce sobre a montanha de forma imponente! Um breu sinistro se estende para dentro dela, como um véu macabro, a tensão da escuridão é quebrada por fracas tochas distribuídas de uniformemente nas paredes do fundo da caverna. Será que você realmente deveria entrar?`
        };

        return trg;
}

export function caveTriggers() {
        let trg;

        trg = {
                1: `Você desceu um longo lance de escada, minutos parecem ter se passado desde que iniciou a descida. Ao chegar ao final, percebe que o que parecia, do lado de fora, o fim da caverna era, na verdade, apenas uma parede em um dos corredores de uma galeria que se ramificava diferentes passagens menores...`,
                2: `Você se espreme por entre uma passagem estreita de pedras desgastadas pela erosão natural do solo. As rochas raspam no seu peito agressivamente, a fricção gera um desconforto crescente, a falta de espaço é brutalmente sufocante, sua garganta se fecha por conta da constante inalação da poeira ancestral que originalmente repousava em seu leito sobre a rocha, agora perturbada pela passagem de um forasteiro que não pertence a aquelas terras, o contingente restante dessas partículas sobrevoa maliciosamente sobre seus olhos, esses que agora se irritam — um castigo severo por sua audácia!`,
                3: `À frente, você avista um poço, um que parece deslocado e idêntico ao da superfície — para não dizer uma cópia perfeita. É estranho, não o fato de um poço residir em um lugar tão profundo, mas sim, uma sensação ambígua, que começa a se instalar em sua amígdala.`,
                4: `Tochas podem ser avistadas, mais uma cabana se revela, destacando-se da escuridão. Por quê? Uma residência não deveria habitar em tal localidade. Ela definitivamente é uma cópia das duas anteriores.`,
                5: `Você não se agrada nem um pouco com aquilo que vê; é uma criatura que só pode ser descrita como uma rosácea de catedral feita puramente de pele humana (completamente descolada da carcaça), músculos expostos e pulsantes, e tendões estranhamente posicionados. Essa coisa é blasfema! Por sorte ela ainda não te viu.`
        };

        return trg;
}

export function caveTriggers() {
        let trg;

        trg = {
                1: `Você desceu um longo lance de escada, minutos parecem ter se passado desde que iniciou a descida. Ao chegar ao final, percebe que o que parecia, do lado de fora, o fim da caverna era, na verdade, apenas uma parede em um dos corredores de uma galeria que se ramificava diferentes passagens menores...`,
                2: `Você se espreme por entre uma passagem estreita de pedras desgastadas pela erosão natural do solo. As rochas raspam no seu peito agressivamente, a fricção gera um desconforto crescente, a falta de espaço é brutalmente sufocante, sua garganta se fecha por conta da constante inalação da poeira ancestral que originalmente repousava em seu leito sobre a rocha, agora perturbada pela passagem de um forasteiro que não pertence a aquelas terras, o contingente restante dessas partículas sobrevoa maliciosamente sobre seus olhos, esses que agora se irritam — um castigo severo por sua audácia!`,
                3: `À frente, você avista um poço, um que parece deslocado e idêntico ao da superfície — para não dizer uma cópia perfeita. É estranho, não o fato de um poço residir em um lugar tão profundo, mas sim, uma sensação ambígua, que começa a se instalar em sua amígdala.`,
                4: `Tochas podem ser avistadas, mais uma cabana se revela, destacando-se da escuridão. Por quê? Uma residência não deveria habitar em tal localidade. Ela definitivamente é uma cópia das duas anteriores.`,
                5: `Você não se agrada nem um pouco com aquilo que vê; é uma criatura que só pode ser descrita como uma rosácea de catedral feita puramente de pele humana (completamente descolada da carcaça), músculos expostos e pulsantes, e tendões estranhamente posicionados. Essa coisa é blasfema! Por sorte ela ainda não te viu.`
=======
                1: `Você olha ao redor; a floresta densa parece preencher quase completamente o seu campo de visão, 
exceto pelo caminho de terra batida sob seus pés, que corta a mata como uma espada, 
dividindo-a em duas metades perfeitamente simétricas. Ao longe, você consegue avistar cabanas 
que se destacam misteriosamente em meio à vasta extensão de árvores — estruturas posicionadas ali como se 
estivessem esperando pela sua chegada.`,
                2: `À sua esquerda, você vê uma cabana; ela parece bem preservada, apesar dos sulcos profundos 
entalhados na parede à direita da porta. Tochas queimam como as brasas de uma fogueira recém-acesa, 
sustentadas por estruturas de madeira e ferro que se assemelham a candelabros de chão, projetando 
uma luz fraca na entrada da cabana. Será que vivem pessoas nesta estrutura?`,
                3: `À sua direita, você pode ver outra cabana — uma que curiosamente parece uma cópia 
quase perfeita da anterior, exceto pelo fato de que uma das tochas está caída no chão, como se 
algo a tivesse empurrado de lado com um ódio mortal.`,
                4: `À sua frente, outra cabana é visível; curiosamente, ela parece uma cópia quase perfeita 
da anterior, exceto que uma das tochas está caída no chão, como se algo a tivesse empurrado 
de lado com um ódio mortal.`,
                5: `A poucos metros à frente, você vê a caverna — a razão de você estar aqui! Sua entrada surge 
imponente contra a montanha. Uma escuridão sinistra e profunda se estende em seu interior como um 
véu macabro; a tensão da escuridão é quebrada apenas por tochas fracas espaçadas uniformemente ao longo das 
paredes mais adentro. Você deve mesmo entrar?`
>>>>>>> 14a6a01 (grivar 1.1.1)
        };

        return trg;
}

export function triggerItem(id) {
        let it = item;

<<<<<<< HEAD
        if (player.class.toLowerCase() === 'mago') {
                let i;
                if (d6() > 5) {
                        i = haT();
                        it.addItem(i);
                        console.log(chalk.yellow.italic(`Você encontrou ${chalk.white.bold(it.itemName(i))}`));
                        prompt(chalk.yellow.bold("Ao pegar o item, um objeto brilhante revelou-se de forma mística, como se estivesse à espera da sua chegada..."));
                }
                i = haT();
                it.addItem(i);
                console.log(chalk.yellow.italic(`Você encontrou ${chalk.white.bold(it.itemName(i))}`));
        } else {
                it.addItem(id);
                console.log(chalk.yellow.italic(`Você encontrou ${chalk.white.bold(it.itemName(id))}`));
        }
}

export async function enmOnGrass() {
        prompt(chalk.yellow.italic(`De canto de olho, você vê uma sombra que se aproxima lentamente, tentando te surpreender; você se vira rapidamente...`));
        await combat(haT());
}

export async function bossFight() {
<<<<<<< HEAD
        prompt(chalk.yellow.italic(`Você se aproxima lentamente da criatura, tentando um ataque covarde pelas costas; cada passo te gera uma ansiedade crescente, o coração palpita violentamente, a pressão é tamanha que pode implodi-lo. Quanto mais próximo, mais é perceptível o cheiro putrefato de o que aparentam ser vários cadáveres.\n`));
        prompt(chalk.yellow.italic(`Os grunhidos que essa criatura gera te deixam aflito — são de dor; animalescos. Vários pensamentos pairam sua cabeça, e se não conseguir desferir o golpe, o que pode acontecer? E se... e se... sua artéria temporal superficial lateja de agonia. Você avança tão lentamente quanto um leão passivamente observando sua presa — apenas esperando pelo momento certo para atacar.\n`));
        prompt(chalk.yellow.italic(`Quanto mais próximo você fica do monstro; maior ele aparenta ser, seu corpo se estende por 4 metros de altura — imponente, amedrontador. De repente, sua intuição decide que este é o momento certo para atacar; você se prepara, e disfere uma investida contra aquele ser. Quando o ataque — este que parecia tão seguro, tão certeiro; alcança uma distancia próxima da espinha dorsal; aquilo aperceber se de uma presença tão irrisória que havia passada desapercebida por todo esse tempo, VOCÊ.\n`));
        prompt(chalk.yellow.italic(`Em uma única virada de cabeça; a aberração revela seus braços feitos de um emaranhado de músculos e tendões, estes que estavam esse tempo todo escondidos sobre aquela pele decomposta; são inúmeros, seria impossível contar — até mesmo para Leonardo Fibonacci. quatro de seus braços se responsabilizam por te atacar com tamanha força; que a primeira coisa que você consegue ver após o ocorrido é o belo leito das rochas; você não morreu, mas deveria.\n`));
        prompt(chalk.yellow.italic(`Aquilo gira a cabeça — em um estalo de pescoço; a qual estava à muito oculta, sua visão é horripilante, você nunca viu nada igual antes, isto pode ser descrito apenas como: "Se o ser é, ele deve ter uma natureza totalmente separada do devir e do movimento. Pois, se dissermos que o que muda é, estamos unindo duas coisas contraditórias. Aquilo que realmente é, permanece idêntico a si mesmo no mesmo estado. Se permitirmos que o ser mude, ele se torna não-ser no instante seguinte".\n`));
        prompt(chalk.yellow.bold(`LUTE POR SUA VIDA!\n`));

        await combat(3);

        process.stdout.write('\x1Bc');
        prompt(chalk.yellow.italic(`A criatura cai no chão desfalecida; seu corpo libera os últimos espasmos de vida que ainda tinha, convulsionando-se. Você sente um alívio percorrer todo o seu corpo; parece que tudo, por fim, acabou! A gratificação é tanta que você desmaia de cansaço.\n`));
        prompt(chalk.yellow.italic(`Quando acorda, você se vê sentado do lado de fora da cabana inicial. Já é de manhã — uma calorosa fogueira te aquece. Ao olhar para a montanha ao longe, onde antes havia uma caverna, agora só há vegetação. O vento sopra, e a planície dominada pela grama agora reflete um verde esmeralda; a sensação de paz te consome por dentro.\n`));
        prompt(chalk.yellow.italic(`Minutos contemplativos se passam, até que um pensamento repentino surge em sua cabeça: "Como farei para retornar ao meu reino?" Você olha em volta, com a esperança de achar algo que te ajude. Existe uma grande bolsa de couro recostada na parede; ela parece completamente cheia. Esperançoso, você olha o que existe dentro dela — abençoada seja a sua sorte.\n`));
        prompt(chalk.yellow.italic(`A bolsa está repleta de mantimentos, que durariam facilmente quatro estações. Além disso, há um espólio valioso: a cabeça da criatura. Este será o seu trunfo, aquilo que mostrará ao rei quando for recebido no reino.\n`));
        prompt(chalk.yellow.italic(`Então, você fecha a bolsa, a amarra em suas costas e apaga a gentil fogueira que lhe ofereceu calor. Vislumbra, em tom de despedida, uma última vez o lugar que quase ceifou sua vida, vira-se e segue rumo ao reino que o aguarda.\n`));
=======
        prompt(chalk.yellow.italic(`Você se aproxima lentamente da criatura, tentando um ataque covarde pelas costas; cada passo te gera 
uma ansiedade crescente, o coração palpita violentamente, a pressão é tamanha que pode implodi-lo. Quanto mais próximo, mais é perceptível 
o cheiro putrefato de o que aparentam ser vários cadáveres.\n`));
        prompt(chalk.yellow.italic(`Os grunhidos que essa criatura gera te deixam aflito — são de dor; animalescos. Vários pensamentos 
pairam sua cabeça, e se não conseguir desferir o golpe, o que pode acontecer? E se... e se... sua artéria temporal superficial lateja 
de agonia. Você avança tão lentamente quanto um leão passivamente observando sua presa — apenas esperando pelo momento certo para atacar.\n`));
        prompt(chalk.yellow.italic(`Quanto mais próximo você fica do monstro; maior ele aparenta ser, seu corpo se estende por 4 metros 
de altura — imponente, amedrontador. De repente, sua intuição decide que este é o momento certo para atacar; você se prepara, e disfere 
uma investida contra aquele ser. Quando o ataque — este que parecia tão seguro, tão certeiro; alcança uma distancia próxima da espinha 
dorsal; aquilo aperceber se de uma presença tão irrisória que havia passada desapercebida por todo esse tempo, VOCÊ.\n`));
        prompt(chalk.yellow.italic(`Em uma única virada de cabeça; a aberração revela seus braços feitos de um emaranhado de músculos e 
tendões, estes que estavam esse tempo todo escondidos sobre aquela pele decomposta; são inúmeros, seria impossível contar — até mesmo 
para Leonardo Fibonacci. quatro de seus braços se responsabilizam por te atacar com tamanha força; que a primeira coisa que você consegue 
ver após o ocorrido é o belo leito das rochas; você não morreu, mas deveria.\n`));
        prompt(chalk.yellow.italic(`Aquilo gira a cabeça — em um estalo de pescoço; a qual estava à muito oculta, sua visão é horripilante, 
você nunca viu nada igual antes, isto pode ser descrito apenas como: "Se o ser é, ele deve ter uma natureza totalmente separada do devir
e do movimento. Pois, se dissermos que o que muda é, estamos unindo duas coisas contraditórias. Aquilo que realmente é, permanece idêntico 
a si mesmo no mesmo estado. Se permitirmos que o ser mude, ele se torna não-ser no instante seguinte".\n`));
        prompt(chalk.yellow.italic(`Você se encontra em pânico, nada poderia ter te preparado para aquilo que agora te encara — profundamente, 
sem nunca desviar o olhar.\n`));
        prompt(chalk.yellow.bold(`LUTE POR SUA VIDA!\n`));

        await combat(3);

        process.stdout.write('\x1Bc');
        prompt(chalk.yellow.italic(`A criatura cai no chão desfalecida; seu corpo libera os últimos espasmos de vida que ainda tinha, 
convulsionando-se. Você sente um alívio percorrer todo o seu corpo; parece que tudo, por fim, acabou! A gratificação é tanta que você 
desmaia de cansaço.\n`));
        prompt(chalk.yellow.italic(`Quando acorda, você se vê sentado do lado de fora da cabana inicial. Já é de manhã — uma calorosa 
fogueira te aquece. Ao olhar para a montanha ao longe, onde antes havia uma caverna, agora só há vegetação. O vento sopra, e a planície 
dominada pela grama agora reflete um verde esmeralda; a sensação de paz te consome por dentro.\n`));
        prompt(chalk.yellow.italic(`Minutos contemplativos se passam, até que um pensamento repentino surge em sua cabeça: "Como farei 
para retornar ao meu reino?" Você olha em volta, com a esperança de achar algo que te ajude. Existe uma grande bolsa de couro recostada 
na parede; ela parece completamente cheia. Esperançoso, você olha o que existe dentro dela — abençoada seja a sua sorte.\n`));
        prompt(chalk.yellow.italic(`A bolsa está repleta de mantimentos, que durariam facilmente quatro estações. Além disso, há um 
espólio valioso: a cabeça da criatura. Este será o seu trunfo, aquilo que mostrará ao rei quando for recebido no reino.\n`));
        prompt(chalk.yellow.italic(`Então, você fecha a bolsa, a amarra em suas costas e apaga a gentil fogueira que lhe ofereceu 
calor. Vislumbra, em tom de despedida, uma última vez o lugar que quase ceifou sua vida, vira-se e segue rumo ao reino que o aguarda.\n`));
>>>>>>> 51953b9 (1.2.0)

        return true;
}
=======
        it.addItem(id);

        console.log(chalk.yellow.italic(`Você encontrou ${chalk.white.bold(it.itemName(id))}`));
}
>>>>>>> 14a6a01 (grivar 1.1.1)
