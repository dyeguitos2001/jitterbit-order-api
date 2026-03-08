const express = require('express');
const {
  createOrder,
  getOrderById,
  listOrders,
  updateOrder,
  deleteOrder
} = require('../controllers/orderController');

const router = express.Router();

// Rota para criar um novo pedido.
router.post('/order', createOrder);

// Rota para listar todos os pedidos.
router.get('/order/list', listOrders);

// Rota para buscar um pedido pelo número.
router.get('/order/:id', getOrderById);

// Rota para atualizar um pedido existente.
router.put('/order/:id', updateOrder);

// Rota para remover um pedido existente.
router.delete('/order/:id', deleteOrder);

module.exports = router;
