let produtos = ["Iphone 14", "Iphone 13", "iphone 12", "Iphone 11", "Iphone XR"]
let precos = [5890, 4850, 3100, 2300, 1500];
let quantidades = [0, 0, 0, 0, 0];

function adicionar() {
  let produtoSelecionado = document.getElementById("produto").value;
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let index = produtos.indexOf(produtoSelecionado);

  if (index !== -1) {
    quantidades[index] += quantidade;
    atualizarCarrinho();
    atualizarTotal();
  } else {
    alert("Produto não encontrado!");
  }
}

function remover() {
  let produtoSelecionado = document.getElementById("produto").value;
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let index = produtos.indexOf(produtoSelecionado);

  if (index !== -1 && quantidades[index] >= quantidade) {
    quantidades[index] -= quantidade;
    atualizarCarrinho();
    atualizarTotal();
  } else {
    alert("Produto não encontrado ou quantidade inválida!");
  }
}

function atualizarCarrinho() {
  let carrinho = document.getElementById("carrinho").getElementsByTagName("li");
  for (let i = 0; i < carrinho.length; i++) {
    carrinho[i].textContent = `${produtos[i]} - ${quantidades[i]}`;
  }
}

function atualizarTotal() {
  let total = calcularTotal();
  document.getElementById("total").textContent = `R$${total.toFixed(2)}`;
}

function adicionarProduto(produto, quantidade) {
  let index = produtos.indexOf(produto);
  if (index !== -1) {
    quantidades[index] += quantidade;
    atualizarCarrinho();
    atualizarTotal();
  } else {
    alert("Produto não encontrado!");
  }
}

function removerProduto(produto, quantidade) {
  let index = produtos.indexOf(produto);
  if (index !== -1 && quantidades[index] >= quantidade) {
    quantidades[index] -= quantidade;
    atualizarCarrinho();
    atualizarTotal();
  } else {
    alert("Produto não encontrado ou quantidade inválida!");
  }
}

function calcularTotal() {
  let total = 0;
  for (let i = 0; i < produtos.length; i++) {
    total += precos[i] * quantidades[i];
  }
  return total;
}

function atualizarCarrinho() {
  let carrinho = document.getElementById("carrinho").getElementsByTagName("li");
  for (let i = 0; i < carrinho.length; i++) {
    carrinho[i].textContent = `${produtos[i]} - ${quantidades[i]}`;
  }
}

function atualizarTotal() {
  let total = calcularTotal();
  document.getElementById("total").textContent = `R$${total.toFixed(2)}`;
}