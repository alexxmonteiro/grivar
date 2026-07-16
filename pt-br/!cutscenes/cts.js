import PromptSync from 'prompt-sync';
import chalk from 'chalk';
import { item } from '../!utilities/inventory.js';

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
        };

        return trg;
}

export function triggerItem(id) {
        let it = item;

        it.addItem(id);

        console.log(chalk.yellow.italic(`Você encontrou ${chalk.white.bold(it.itemName(id))}`));
}
