import PromptSync from "prompt-sync";
import chalk from "chalk";
import { haT } from "../../!utilities/randomizr.js";
import { combat } from "../../!utilities/combat.js";

const prompt = PromptSync();

export async function fhut_triggerProp() {
        console.clear();
        console.log(chalk.yellow.italic(`A luz das tochas, mesmo fraca, ilumina a entrada da cabana, um sentimento de segurança paira levemente sobre o ar, uma 
falsa nostalgia te atravessa o peito, não existe perigo, porém, está errado, não da pra dizer o que, mas o silencio da noite gera uma 
inquietude, onde está o chirriar das corujas? Que se fazem presentes em períodos noturnos, ou a chata e incessante estridulação dos 
grilos? Nada há no que deveria haver, apenas o som de sua respiração e o estralar repetitivo e artificial das tochas se fazem 
presentes. Atacado por esse sentimento estranho você decide entrar na cabana... `));
        prompt();

        console.log(chalk.yellow.italic(`Enquanto inspeciona o local, em cima de uma mesa, iluminado por uma vela de cera de abelha, 
essa que exala um odor adocicado e agradável, do lado de uma pena e tinta ferrogálica, é possível ver um pergaminho com uma mensagem
escrita nele.
"À Sua Majestade Real,
É com o espírito tomado pelo mais profundo pavor que dirijo esta missiva a Vós. Os súditos desta província desaparecem misteriosamente
de dentro de suas habitações, sem que possamos compreender a causa de tamanho flagelo. Vossas terras estão sendo esvaziadas.
Sempre que me vejo obrigado a transitar pelas proximidades daquela maldita caverna, sou assolado por grunhidos pavorosos — brados altos, 
sufocantes e estridentes que ecoam das profundezas das rochas em direção à entrada, como o clamor de um mal antigo.
Ignoro se os meus apelos anteriores chegaram aos Vossos olhos, meu senhor, mas suplico, pelo amor do bom Deus, que se esta carta 
receber a Vossa augusta atenção, envieis Vossos homens e tomeis uma providência imediata, pois a escuridão avança sobre nós...".`));
        prompt();

        console.log(chalk.yellow.italic(`Após ler o conteúdo da carta, um estrondo alarmante ecoa por toda a cabana, parece que a porta 
se fechou repentinamente, ao se virar, você vê o que parece ser um esqueleto com uma armadura de placas e espada na mão, ambas 
enferrujadas, não possuía o elmo, ele fica te observando, imóvel, como uma estatua de mármore, a duvida que paira no ar é como aquilo
ainda está de pé, ele nem ao menos possui juntas ou sangue corrente, é apenas um conjunto de ossos secos e um pouco deteriorados pelo 
tempo, enquanto você reflete, ele começa a andar lentamente em sua direção, você sente a dor que cada passo lhe causa.`));
        prompt();

        console.log(chalk.yellow.bold(`REPENTINAMENTE`) + chalk.yellow.italic(`, ele avança rapidamente em sua direção, pronto para te atacar...`));
        prompt();

        await combat(1);
}

export async function shut_triggerProp() {
        console.log(chalk.yellow.italic(`Ao se aproximar da porta da cabana, você sente um mal pressentimento, algo está completamente 
errado, uma das tochas está acesa, esta gera uma turva iluminação que se projeta sobre o lado esquerdo da porta, enquanto a outra
repousa no chão, esse sentimento é intensificado por um calafrio que percorre todo seu corpo repentinamente. Seu corpo paralisa 
involuntariamente por segundos, até que você explode em um misto de coragem e impulsividade e entra no alojamento sem olhar para trás...`));
        prompt();

        console.log(chalk.yellow.italic(`A tênue luz exterior te permite uma visão limitada do interior, é apenas um cômodo, nada 
há dentro, um espaço completamente esvaziado de significado, você se questiona do sentido de uma moradia vazia até que.`));
        prompt();

        console.log(chalk.yellow.bold(`De um dos cantos escuros`) + chalk.yellow.italic(`, você vê algo que se aproxima agilmente, isto parece hostil...`));
        prompt();

        await combat(haT())
}

export async function cave_hut() {
        console.log(chalk.yellow.italic(`Você força a porta de madeira em uma tentativa de entrar na cabana; Por mais que sendo pressionada 
com força, a porta não se abre, é como se algo estivesse dentro bloqueando a passagem, ou talvez a cabana nem ao menos seja, de fato 
uma cabana. Enquanto você é bombardeado por uma nuvem de pensamentos, escuta passos atrás de você, rapidamente você se vira, apenas para
se deparar com um esqueleto correndo em sua direção furiosamente. Ele consegue desferir um golpe poderoso, você escapa por pouco! 
Graças a seus abençoados reflexos. Ele quer a sua cabeça!`));
        prompt();

        await combat(1);
}