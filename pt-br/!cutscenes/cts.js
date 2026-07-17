import PromptSync from 'prompt-sync';
import chalk from 'chalk';
import { item } from '../!utilities/inventory.js';
import { haT } from '../!utilities/randomizr.js';
import { player } from '../!utilities/player.js';

const prompt = PromptSync();

export function actOne() {
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

export function triggers() {
        let trg;

        trg = {
                1: `Você olha ao redor, pode se dizer que a floresta densa cobre quase completamente seu campo de visão, a não ser pelo 
caminho de terra batida ao qual caminha sobre, que corta como uma espada a floresta em duas metades perfeitamente simétricas. Ao longe 
é possível ver cabanas, essas que se destacam misteriosamente entre a vastidão finita de árvores, elas estão instaladas lá como se 
já estivessem ao seu aguardo.`,
                2: `Ao seu lado esquerdo você vê uma cabana, ela aparenta estar conservada, mesmo com as ranhuras profundas gravadas 
na parede do lado direito da porta. Tochas queimam como as brasas de uma fogueira recém acesa, estas se posicionam de pé em estruturas
de madeira e ferro que lembram candelabros de chão, projetando uma luz tênue sobre a entrada da cabana. Será que pessoas residem 
nessa construção?`,
                3: `Ao seu lado direito é possível observar outra cabana, que estranhamente parece uma cópia quase perfeita da cabana 
anterior, a não ser pelo fato de que uma das tochas está no chão, como se algo tivesse a empurrado com um ódio mortal.  `,
                4: `À sua frente, avista-se outra cabana; estranhamente, ela parece uma cópia quase perfeita da anterior, exceto pelo 
fato de que uma das tochas está caída no chão, como se algo a tivesse empurrado para o lado com um ódio mortal.`,
                5: `Metros à frente, você vê a caverna, o motivo de estar aqui! Sua entrada cresce sobre a montanha de forma imponente! 
Um breu sinistro se estende para dentro dela, como um véu macabro, a tensão da escuridão é quebrada por fracas tochas distribuídas de 
uniformemente nas paredes do fundo da caverna. Será que você realmente deveria entrar?`
        };

        return trg;
}

export function triggerItem(id) {
        let it = item;

        if (player.class.toLowerCase() === 'mago') {
                if (haT() === 1) {
                        let i = haT();
                        it.addItem(i);
                        console.log(chalk.yellow.italic(`Você encontrou ${chalk.white.bold(it.itemName(i))}`));
                }
                it.addItem(id);
                console.log(chalk.yellow.italic(`Você encontrou ${chalk.white.bold(it.itemName(id))}`));
        } else {
                it.addItem(id);
                console.log(chalk.yellow.italic(`Você encontrou ${chalk.white.bold(it.itemName(id))}`));
        }
}
