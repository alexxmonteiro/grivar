import PromptSync from "prompt-sync";
import chalk from "chalk";
import { haT } from "../../!utilities/randomizr.js";
import { combat } from "../../!utilities/combat.js";

const prompt = PromptSync();

export async function fhut_triggerProp() {
        console.clear();
        console.log(chalk.yellow.italic(`A luz das tochas, embora fraca, ilumina a entrada da cabana; uma sensação de segurança paira levemente no ar, e uma falsa nostalgia toma conta de você. Não há perigo aparente, mas algo parece errado — você não sabe dizer exatamente o quê —, mas o silêncio da noite gera inquietação. Onde está o pio das corujas — geralmente presentes à noite — ou o incessante cantar dos grilos? Nada está onde deveria estar; restam apenas o som da sua própria respiração e o estalar repetitivo e artificial das tochas. Tomado por esse estranho sentimento, você decide entrar na cabana...`));
        prompt();

        console.log(chalk.yellow.italic(`Ao inspecionar a scene, repousando sobre uma mesa — iluminada por uma vela de cera de abelha que exala um aroma doce e agradável, e ao lado de uma pena e tinta ferrogálica — um pergaminho com uma mensagem escrita surge à vista.
"À Sua Majestade Real,
É com o espírito tomado pelo mais profundo pavor que dirijo esta missiva a Vós. Os súditos desta província desaparecem misteriosamente de dentro de suas habitações, sem que possamos compreender a causa de tamanho flagelo. Vossas terras estão sendo esvaziadas.
Sempre que me vejo obrigado a transitar pelas proximidades daquela maldita caverna, sou assolado por grunhidos pavorosos — brados altos, sufocantes e estridentes que ecoam das profundezas das rochas em direção à entrada, como o clamor de um mal antigo.
Ignoro se os meus apelos anteriores chegaram aos Vossos olhos, meu senhor, mas suplico, pelo amor do bom Deus, que se esta carta receber a Vossa augusta atenção, envieis Vossos homens e tomeis uma providência imediata, pois a escuridão avança sobre nós...".`));
        prompt();

        console.log(chalk.yellow.italic(`Após ler o conteúdo da carta, um estrondo alarmante ecoa pela cabana — parece que a porta se fechou de repente com força. Virando-se, você vê o que parece ser um esqueleto vestindo armadura de placas e empunhando uma espada; tanto a armadura quanto a arma estão enferrujadas, e a figura não possui elmo. Ela permanece observando você, imóvel como uma estátua de mármore; a questão que paira no ar é como ela se mantém de pé, pois não possui articulações nem sangue correndo — é apenas um amontoado de ossos secos, um tanto desgastados pelo tempo. Enquanto você reflete sobre isso, ela começa a caminhar lentamente em sua direção; você consegue sentir a dor que cada passo lhe causa.`));
        prompt();

        console.log(chalk.yellow.bold(`DE REPENTE`) + chalk.yellow.italic(`, ela avança rapidamente em sua direção, pronta para atacar...`));
        prompt();

        await combat(1);
}

export async function shut_triggerProp() {
        console.log(chalk.yellow.italic(`Ao se aproximar da porta da cabana, você sente um mau pressentimento — algo está terrivelmente errado. Uma das tochas está acesa, lançando um brilho sombrio sobre o lado esquerdo da entrada, enquanto a outra jaz no chão; um arrepio repentino correndo pelo seu corpo intensifica essa sensação de pavor. Você congela involuntariamente por alguns segundos, até que um surto de coragem e impulsividade misturadas o leva a entrar no aposento sem olhar para trás...`));
        prompt();

        console.log(chalk.yellow.italic(`A fraca luz externa lhe proporciona uma visão limitada do interior; trata-se apenas de um cômodo — não há nada dentro, completamente desprovido de sentido. Você questiona o propósito de uma moradia vazia até que...`));
        prompt();

        console.log(chalk.yellow.bold(`de um dos cantos escuros`) + chalk.yellow.italic(`, você vê algo se aproximando rapidamente — parece hostil...`));
        prompt();

        await combat(haT())
}

export async function cave_hut() {
        console.log(chalk.yellow.italic(`Você força a porta de madeira em uma tentativa de entrar na cabana; Por mais que sendo pressionada com força, a porta não se abre, é como se algo estivesse dentro bloqueando a passagem, ou talvez a cabana nem ao menos seja, de fato uma cabana. Enquanto você é bombardeado por uma nuvem de pensamentos, escuta passos atrás de você, rapidamente você se vira, apenas para se deparar com um esqueleto correndo em sua direção furiosamente. Ele consegue desferir um golpe poderoso, você escapa por pouco! Graças a seus abençoados reflexos. Ele quer a sua cabeça!`));
        prompt();

        await combat(1);
}