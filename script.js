const campoPesquisa = document.getElementById("pesquisa");
const cards = document.querySelectorAll(".card");
const resultado = document.getElementById("resultado");

function pesquisar() {
    let texto = campoPesquisa.value.toLowerCase();
    let quantidade = 0;

    cards.forEach(function(card) {
        const nome = card.dataset.nome.toLowerCase();
        const sinopse = card.dataset.sinopse.toLowerCase();

        if (nome.includes(texto) || sinopse.includes(texto)) {
            card.style.display = "block";
            quantidade++;
        } else {
            card.style.display = "none";
        }
    });

    if (texto == "") {
        resultado.innerHTML = "";
    } else {
        resultado.innerHTML = quantidade + " filme(s) encontrado(s).";
    }

    console.log("Pesquisa:", texto);
    console.log("Filmes encontrados:", quantidade);
}

campoPesquisa.addEventListener("input", pesquisar);

const botoes = document.querySelectorAll(".assistir");

botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {
        const video = botao.dataset.video;
        const card = botao.parentElement;
        const titulo = card.dataset.nome;
        const sinopse = card.dataset.sinopse;

        const novaAba = window.open("", "_blank");

        novaAba.document.write(`
            <!DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <title>${titulo} - CineDev</title>
                <style>
                    body { background:#111; color:white; font-family:Arial; margin:0; }
                    header { background:#050505; padding:20px; border-bottom:3px solid #e50914; }
                    h1 { color:#e50914; }
                    main { width:90%; max-width:900px; margin:30px auto; }
                    .player { width:100%; aspect-ratio:16/9; background:#000; }
                    iframe { width:100%; height:100%; border:0; }
                    .voltar { display:inline-block; margin-top:20px; padding:10px 20px;
                              background:#e50914; color:white; text-decoration:none; }
                </style>
            </head>
            <body>
                <header><strong>CineDev</strong></header>
                <main>
                    <h1>${titulo}</h1>
                    <p>${sinopse}</p>
                    <div class="player">
                        <iframe src="${video}" allowfullscreen></iframe>
                    </div>
                    <a class="voltar" href="javascript:window.close()">Voltar</a>
                </main>
            </body>
            </html>
        `);

        novaAba.document.close();
    });
});

const formulario = document.getElementById("formulario");
const mensagemForm = document.getElementById("mensagemForm");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome != "" && email != "" && mensagem != "") {
        mensagemForm.innerHTML = "Mensagem enviada! Obrigado, " + nome + ".";
        console.log("Nome:", nome);
        console.log("Email:", email);
        console.log("Mensagem:", mensagem);
    } else {
        mensagemForm.innerHTML = "Preencha todos os campos.";
    }
});

let siteAtivo = true;
const quantidadeFilmes = filmes.length;
let notaExemplo = 10;

console.log("CineDev está funcionando:", siteAtivo);
console.log("Quantidade de filmes:", quantidadeFilmes);
console.log("Nota:", notaExemplo);
console.log("Array:", filmes);
