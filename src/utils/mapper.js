// Faz a transformação do payload recebido para o formato exigido no banco.
// Essa etapa atende ao requisito do teste que pede o mapping dos campos.
function mapOrderPayload(payload) {
  return {
    orderId: payload.numeroPedido,
    value: payload.valorTotal,
    creationDate: payload.dataCriacao,
    items: payload.items.map((item) => ({
      productId: Number(item.idItem),
      quantity: item.quantidadeItem,
      price: item.valorItem
    }))
  };
}

module.exports = { mapOrderPayload };
