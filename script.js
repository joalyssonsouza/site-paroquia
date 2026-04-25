const versiculos = [
    "“Alegrai-vos sempre no Senhor.” (Filipenses 4:4)",
    "“Bem-aventurados os que promovem a paz.” (Mateus 5:9)",
    "“Buscai primeiro o Reino de Deus.” (Mateus 6:33)",
    "“O Senhor é a minha luz e a minha salvação.” (Salmo 27:1)",
    "“Entregue o seu caminho ao Senhor; confie nele, e ele agirá.” (Salmo 37:5)",
    "“O Senhor está perto de todos os que o invocam.” (Salmo 145:18)"
];

let index = 0;

function trocarVersiculo() {
    const elemento = document.getElementById("versiculo-texto");

    // fade out
    elemento.style.opacity = 0;

    setTimeout(() => {
        elemento.innerHTML = `<i class="fa-solid fa-book-bible"></i> ${versiculos[index]}`;
        elemento.style.opacity = 1;

        index = (index + 1) % versiculos.length;
    }, 500);
}

// troca automática a cada 4 segundos
setInterval(trocarVersiculo, 4000);

// mostra o primeiro imediatamente
trocarVersiculo();

function mostrarOracao(tipo) {
    const conteudo = document.getElementById("conteudo-oracao");

    const oracoes = {

        paiNosso: `
        <h3>Pai Nosso</h3>
        <p>
        Pai nosso que estais no céu, santificado seja o vosso nome; venha a nós o vosso reino; 
        seja feita a vossa vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje; 
        perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido; 
        e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.
        </p>
        `,

        aveMaria: `
        <h3>Ave Maria</h3>
        <p>
        Ave Maria, cheia de graça, o Senhor é convosco; bendita sois vós entre as mulheres, 
        e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, 
        agora e na hora de nossa morte. Amém.
        </p>
        `,

        credo: `
        <h3>Credo</h3>
        <p>
        Creio em Deus Pai todo-poderoso, criador do céu e da terra; e em Jesus Cristo, seu único Filho, nosso Senhor; 
        que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria; padeceu sob Pôncio Pilatos; 
        foi crucificado, morto e sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro dia; 
        subiu aos céus; está sentado à direita de Deus Pai todo-poderoso, donde há de vir a julgar os vivos e os mortos. 
        Creio no Espírito Santo; na Santa Igreja Católica; na comunhão dos santos; na remissão dos pecados; 
        na ressurreição da carne; na vida eterna. Amém.
        </p>
        `,

        salveRainha: `
        <h3>Salve Rainha</h3>
        <p>
        Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! 
        A vós bradamos, os degredados filhos de Eva; a vós suspiramos, gemendo e chorando neste vale de lágrimas. 
        Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei; 
        e depois deste desterro, mostrai-nos Jesus, bendito fruto do vosso ventre, 
        ó clemente, ó piedosa, ó doce sempre Virgem Maria. Rogai por nós, Santa Mãe de Deus, 
        para que sejamos dignos das promessas de Cristo. Amém.
        </p>
        `,

        santoAnjo: `
        <h3>Santo Anjo</h3>
        <p>
        Santo Anjo do Senhor, meu zeloso guardador, se a ti me confiou a piedade divina, 
        sempre me rege, me guarda, me governa e me ilumina. Amém.
        </p>
        `,

        nossaSenhoraCabeca: `
        <h3>Nossa Senhora da Cabeça</h3>
        <p>
        (Coloque aqui a oração da sua paróquia)
        </p>
        `
    };

    conteudo.innerHTML = oracoes[tipo];
}

const elementos = document.querySelectorAll('.animar');

function animarScroll() {
    const alturaTela = window.innerHeight;

    elementos.forEach(el => {
        const posicao = el.getBoundingClientRect().top;

        if (posicao < alturaTela - 50) {
            el.classList.add('ativo');
        }
    });
}

window.addEventListener('scroll', animarScroll);

// executar ao carregar
animarScroll();

// =========================
// ABRIR / FECHAR ORAÇÃO
// =========================
function toggleOracao() {
    const el = document.getElementById("oracaoCompleta");

    if (el.style.display === "block") {
        el.style.display = "none";
    } else {
        el.style.display = "block";
    }
}