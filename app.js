// ==========================================
// SEMANA 04 - ARRAYS, DOM E EVENTOS
// ==========================================


// BLOCO 1 - ARRAYS E MÉTODOS

console.log("===== BLOCO 1 - ARRAYS E MÉTODOS =====");

// 1. forEach e map com nomes
const nomes = ["Ana", "Carlos", "Mariana"];

nomes.forEach(nome => {
    console.log(`Olá, ${nome}!`);
});

const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
console.log("Nomes em maiúsculas:", nomesMaiusculos);


// 2. filter e reduce com preços
const precos = [10, 25, 40, 5, 60];

const precosAcimaDe20 = precos.filter(preco => preco > 20);
console.log("Preços acima de 20:", precosAcimaDe20);

const somaPrecos = precos.reduce((total, preco) => total + preco, 0);
console.log("Soma dos preços:", somaPrecos);


// 3. Array de objetos produtos
const produtos = [
    { nome: "Caderno", preco: 15 },
    { nome: "Mochila", preco: 80 },
    { nome: "Caneta", preco: 5 },
    { nome: "Livro", preco: 40 }
];

const nomesProdutos = produtos.map(produto => produto.nome);
console.log("Nomes dos produtos:", nomesProdutos);

const produtosBaratos = produtos.filter(produto => produto.preco < 50);
console.log("Produtos com preço menor que 50:", produtosBaratos);

const totalProdutos = produtos.reduce(
    (total, produto) => total + produto.preco,
    0
);
console.log("Valor total dos produtos: R$", totalProdutos);

produtos.forEach(produto => {
    console.log(`${produto.nome}: R$ ${produto.preco.toFixed(2)}`);
});


// BLOCO 2 - MANIPULAÇÃO DO DOM

console.log("===== BLOCO 2 - MANIPULAÇÃO DO DOM =====");

// 1. Selecionar o h1 e alterar o texto
const titulo = document.querySelector("#titulo");
titulo.textContent = "Blog do Seu Nome";


// 2. Selecionar todos os parágrafos .texto
const paragrafos = document.querySelectorAll(".texto");

paragrafos.forEach(paragrafo => {
    console.log("Texto do parágrafo:", paragrafo.textContent);
});


// 3. Inserir dois itens com innerHTML
const lista = document.querySelector("#lista");

lista.innerHTML = `
    <li>Primeiro item</li>
    <li>Segundo item</li>
`;


// 4. Criar o terceiro item e aplicar destaque
const terceiroItem = document.createElement("li");
terceiroItem.textContent = "Terceiro item";
lista.append(terceiroItem);

terceiroItem.classList.add("destaque");

console.log(
    "Tem a classe destaque?",
    terceiroItem.classList.contains("destaque")
);


// 5. Criar tarefas com forEach
const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];

tarefas.forEach(tarefa => {
    const item = document.createElement("li");
    item.textContent = tarefa;
    lista.append(item);
});

lista.querySelector("li").classList.add("feito");

console.log(
    "Quantidade total de itens:",
    lista.querySelectorAll("li").length
);


// BLOCO 3 - EVENTOS E EVENT DELEGATION

console.log("===== BLOCO 3 - EVENTOS =====");

// 1. Clique no botão
const botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
    console.log("Clicou!");
});


// 2. Mouse sobre o botão
botao.addEventListener("mouseover", () => {
    botao.textContent = "Pode clicar!";
});


// 3. Digitação no campo nome
const campoNome = document.querySelector("#nome");

campoNome.addEventListener("keyup", () => {
    console.log("Nome digitado:", campoNome.value);
});


// 4. Event Delegation: um listener para toda a lista
lista.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("feito");
        console.log("Item clicado:", e.target.textContent);
    }
});


// 5. Criar um item dinamicamente
const itemDinamico = document.createElement("li");
itemDinamico.textContent = "Item criado pelo JavaScript";
lista.append(itemDinamico);


// 6. Formulário para adicionar tarefas
const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const textoTarefa = campoTarefa.value.trim();

    if (textoTarefa === "") {
        return;
    }

    const novoItem = document.createElement("li");
    novoItem.textContent = textoTarefa;
    lista.append(novoItem);

    campoTarefa.value = "";
});

console.log("JavaScript carregado com sucesso!");
