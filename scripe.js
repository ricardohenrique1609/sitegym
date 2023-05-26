function adicionarAoCarrinho(produto) {
    // Obter o carrinho atual do armazenamento local (localStorage)
    var carrinho = localStorage.getItem('carrinho');

    if (!carrinho) {
        // Se o carrinho não existir, criar uma lista vazia
        carrinho = [];
    } else {
        // Se o carrinho existir, fazer o parsing do JSON para obter a lista de itens
        carrinho = JSON.parse(carrinho);
    }

    // Adicionar o produto selecionado ao carrinho
    carrinho.push(produto);

    // Salvar o carrinho atualizado no armazenamento local (localStorage)
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function exibirCarrinho() {
    // Obter o carrinho do armazenamento local (localStorage)
    var carrinho = localStorage.getItem('carrinho');

    if (carrinho) {
        // Fazer o parsing do JSON para obter a lista de itens
        carrinho = JSON.parse(carrinho);

        // Obter a lista de compras na página de carrinho
        var carrinhoLista = document.getElementById('carrinho');

        // Limpar a lista de compras antes de exibir os itens atualizados
        carrinhoLista.innerHTML = '';

        // Iterar sobre cada item do carrinho e adicioná-lo à lista de compras
        for (var i = 0; i < carrinho.length; i++) {
            var produto = carrinho[i];

            var listItem = document.createElement('li');
            listItem.textContent = produto;

            carrinhoLista.appendChild(listItem);
        }
    }
}

function exibirCompras() {
    // Obter o carrinho do armazenamento local (localStorage)
    var carrinho = localStorage.getItem('carrinho');

    if (carrinho) {
        // Fazer o parsing do JSON para obter a lista de itens
        carrinho = JSON.parse(carrinho);

        // Obter a lista de compras na página de compras
        var comprasLista = document.getElementById('compras');

        // Limpar a lista de compras antes de exibir os itens do carrinho
        comprasLista.innerHTML = '';

        // Iterar sobre cada item do carrinho e adicioná-lo à lista de compras
        for (var i = 0; i < carrinho.length; i++) {
            var produto = carrinho[i];

            var listItem = document.createElement('li');
            listItem.textContent = produto;

            comprasLista.appendChild(listItem);
        }
    }
}

// Chamar as funções de exibição de carrinho e compras quando as páginas forem carregadas
if (window.location.pathname === '/cart.html') {
    exibirCarrinho();
} else if (window.location.pathname === '/compras.html') {
    exibirCompras();
}
