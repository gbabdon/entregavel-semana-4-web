# entregavel-semana-4-web

Entregável de Desenvolvimento Web – Semana 04
Arrays, DOM e Eventos
Descrição do projeto

Este projeto foi desenvolvido como atividade prática da Semana 04 da disciplina de Desenvolvimento Web. O objetivo é praticar métodos de arrays, manipulação do DOM e eventos utilizando JavaScript.

Bloco 1 – Arrays e métodos
forEach: percorre os elementos de um array e executa uma função para cada elemento.
map: cria um novo array com os resultados de uma transformação aplicada aos elementos.
filter: cria um novo array com os elementos que atendem a uma condição.
reduce: acumula os valores de um array e retorna um único resultado, como a soma dos preços.
Bloco 2 – Manipulação do DOM
querySelector: seleciona o primeiro elemento correspondente a um seletor CSS.
querySelectorAll: seleciona todos os elementos que correspondem a um seletor.
textContent: consulta ou altera o conteúdo textual de um elemento.
innerHTML: insere conteúdo HTML dentro de um elemento.
createElement: cria novos elementos HTML.
append: adiciona elementos ao final de outro elemento.
classList.add: adiciona uma classe CSS.
classList.contains: verifica se um elemento possui determinada classe.

Esses recursos permitem alterar o título, consultar parágrafos, criar itens na lista e modificar suas classes.

Bloco 3 – Eventos e Event Delegation

O método addEventListener permite executar funções em resposta a eventos, como cliques, movimentos do mouse, digitação e envio de formulários.

O método preventDefault() impede o recarregamento da página durante o envio do formulário. Já o método trim() remove espaços no início e no final do texto, evitando o cadastro de tarefas vazias.

O Event Delegation consiste em adicionar um único listener ao elemento pai, neste caso, a lista #lista. A propriedade e.target identifica o elemento clicado. Dessa forma, o mesmo listener funciona para itens existentes e criados dinamicamente, reduzindo a quantidade de listeners e facilitando a manutenção do código.

Como executar
Abra o arquivo index.html no navegador.
Pressione F12 e acesse a aba Console.
Confira os resultados dos arrays.
Teste o botão, o campo de nome, os itens da lista e o formulário de tarefas.
Tecnologias utilizadas
HTML5
CSS3
JavaScript (ES6+)

