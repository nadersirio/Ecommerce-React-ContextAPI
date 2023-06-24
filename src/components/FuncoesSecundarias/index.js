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

export const TiraDoCarrinho = (props, setOpenSnackbar) => {
  if (!props.carrinho.length) {
    setOpenSnackbar(true);
  }
  const indexParaRemover = props.carrinho.findIndex((item) => item.item === props.nome);
  if (indexParaRemover !== -1) {
    let novoCarrinho = [...props.carrinho];
    novoCarrinho.splice(indexParaRemover, 1);
    props.setCarrinho(novoCarrinho);
  }
}

export const AdicionaAoCarrinho = (props) => {
  let item = {
    "item": props.nome,
    "valor": props.valor,
  };
  props.setCarrinho([...props.carrinho, item]);
};
