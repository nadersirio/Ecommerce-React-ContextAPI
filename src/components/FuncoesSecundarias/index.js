export const CalculaValorCarrinho = (carrinho) => {
  if (!carrinho.length) {
    return 0;
  }
  let valorTotal = 0;
  for (let i = 0; i < carrinho.length; i++) {
    valorTotal += carrinho[i].valor;
  }
  return valorTotal;
};

export const TiraDoCarrinho = (props) => {
  const indexParaRemover = props.carrinho.findIndex((item) => item.item === props.nome);
  props.setCarrinho(props.carrinho.filter((_, index) => indexParaRemover !== index))
}

export const AdicionaAoCarrinho = (props) => {
  const item = {
    "item": props.nome,
    "valor": props.valor,
  };
  props.setCarrinho([...props.carrinho, item]);
};
