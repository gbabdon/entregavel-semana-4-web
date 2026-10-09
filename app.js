// ==========================================
// SEMANA 04 - ARRAYS, DOM E EVENTOS
// ==========================================


// ==========================================
// BLOCO 1 - ARRAYS E MÉTODOS
// ==========================================

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

const somaPrecos = precos.reduce(
    (total, preco) => total + preco,
    0
);

console.log("Soma dos preços:", somaPrecos);


// 3. Array de objetos produtos
const produtos = [
    { nome: "Caderno", preco: 15 },
    { nome: "Mochila", preco: 80 },
    { nome: "Caneta", preco: 5 },
    { nome: "Livro", preco: 40 }
];

// Extrair os nomes dos produtos com map
const nomesProdutos = produtos.map(produto => produto.nome);

console.log("Nomes dos produtos:", nomesProdutos);

// Filtrar produtos com preço menor que 50
const produtosBaratos = produtos.filter(produto => produto.preco < 50);

console.log("Produtos com preço menor que 50:", produtosBaratos);

// Somar os preços com reduce
const totalProdutos = produtos.reduce(
    (total, produto) => total + produto.preco,
    0
);

console.log("Valor total dos produtos: R$", totalProdutos);

// Imprimir nome e preço com forEach
produtos.forEach(produto => {
    console.log(`${produto.nome}: R$ ${produto.preco.toFixed(2)}`);
});


// ==========================================
// BLOCO 2 - MANIPULAÇÃO DO DOM
// ==========================================

console.log("===== BLOCO 2 - MANIPULAÇÃO DO DOM =====");

// 1. Selecionar o h1 e alterar seu texto
const titulo = document.querySelector("#titulo");

titulo.textContent = "Blog de Desenvolvimento Web";


// 2. Selecionar todos os parágrafos com a classe texto
const paragrafos = document.querySelectorAll(".texto");

paragrafos.forEach(paragrafo => {
    console.log("Texto do parágrafo:", paragrafo.textContent);
});


// 3. Selecionar a lista e inserir dois itens com innerHTML
const lista = document.querySelector("#lista");

lista.innerHTML = `
    <li>Primeiro item</li>
    <li>Segundo item</li>
`;


// 4. Criar o terceiro item com createElement
const terceiroItem = document.createElement("li");

terceiroItem.textContent = "Terceiro item";

lista.append(terceiroItem);

// Adicionar a classe destaque
terceiroItem.classList.add("destaque");

// Verificar se a classe foi adicionada
console.log(
    "O terceiro item tem a classe destaque?",
    terceiroItem.classList.contains("destaque")
);


// 5. Criar itens para o array de tarefas
const tarefas = [
    "Estudar JS",
    "Fazer exercícios",
    "Revisar DOM"
];

tarefas.forEach(tarefa => {
    const item = document.createElement("li");

    item.textContent = tarefa;

    lista.append(item);
});

// Aplicar a classe feito ao primeiro item
lista.querySelector("li").classList.add("feito");

// Imprimir a quantidade total de itens
console.log(
    "Quantidade total de itens:",
    lista.querySelectorAll("li").length
);


// ==========================================
// BLOCO 3 - EVENTOS E EVENT DELEGATION
// ==========================================

console.log("===== BLOCO 3 - EVENTOS =====");


// 1. Evento de clique no botão
const botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
    console.log("Clicou!");
});


// 2. Evento mouseover no botão
botao.addEventListener("mouseover", () => {
    botao.textContent = "Pode clicar!";
});


// 3. Evento keyup no campo nome
const campoNome = document.querySelector("#nome");

campoNome.addEventListener("keyup", () => {
    console.log("Nome digitado:", campoNome.value);
});


// 4. Event Delegation na lista
// Um único listener trata os cliques em todos os itens <li>.
lista.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("feito");

        console.log("Item clicado:", e.target.textContent);
    }
});


// 5. Criar um novo item dinamicamente
const itemDinamico = document.createElement("li");

itemDinamico.textContent = "Item criado pelo JavaScript";

lista.append(itemDinamico);

// O clique nesse item também funciona por causa do Event Delegation.


// 6. Evento de envio do formulário
const formulario = document.querySelector("#formulario");

const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", (e) => {
    // Evitar o recarregamento da página
    e.preventDefault();

    // Obter o texto e remover espaços extras
    const textoTarefa = campoTarefa.value.trim();

    // Não adicionar itens vazios
    if (textoTarefa === "") {
        return;
    }

    // Criar e adicionar uma nova tarefa
    const novoItem = document.createElement("li");

    novoItem.textContent = textoTarefa;

    lista.append(novoItem);

    // Limpar o campo do formulário
    campoTarefa.value = "";
});

console.log("JavaScript carregado com sucesso!");
