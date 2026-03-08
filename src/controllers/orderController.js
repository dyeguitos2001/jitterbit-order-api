const Order = require('../models/Order');

    if (validationError) {
      return res.status(400).json({ message: validationError });
    }

    const mappedOrder = mapOrderPayload(req.body);
    mappedOrder.orderId = id;

    const updatedOrder = await Order.findOneAndUpdate(
      { orderId: id },
      mappedOrder,
      { new: true, runValidators: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Pedido não encontrado para atualização.' });
    }

    return res.status(200).json({
      message: 'Pedido atualizado com sucesso.',
      data: updatedOrder
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Erro interno ao atualizar pedido.',
      error: error.message
    });
  }
}

// Remove um pedido do banco a partir do orderId.
async function deleteOrder(req, res) {
  try {
    const { id } = req.params;

    const deletedOrder = await Order.findOneAndDelete({ orderId: id });
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Pedido não encontrado para exclusão.' });
    }

    return res.status(200).json({
      message: 'Pedido removido com sucesso.',
      data: deletedOrder
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Erro interno ao remover pedido.',
      error: error.message
    });
  }
}

module.exports = {
  createOrder,
  getOrderById,
  listOrders,
  updateOrder,
  deleteOrder
};
