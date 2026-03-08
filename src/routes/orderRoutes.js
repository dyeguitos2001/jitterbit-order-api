const express = require('express');
const {
  createOrder,
  getOrderById,
  listOrders,
  updateOrder,
  deleteOrder
} = require('../controllers/orderController');

const router = express.Router();
/**
 *           format: date-time
 *           example: 2023-07-19T12:24:11.5299601+00:00
 *         items:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/OrderItemInput'
 *     OrderItemInput:
 *       type: object
 *       required:
 *         - idItem
 *         - quantidadeItem
 *         - valorItem
 *       properties:
 *         idItem:
 *           type: string
 *           example: '2434'
 *         quantidadeItem:
 *           type: number
 *           example: 1
 *         valorItem:
 *           type: number
 *           example: 1000
 *     Order:
 *       type: object
 *       properties:
 *         orderId:
 *           type: string
 *           example: v10089015vdb-01
 *         value:
 *           type: number
 *           example: 10000
 *         creationDate:
 *           type: string
 *           format: date-time
 *           example: 2023-07-19T12:24:11.529Z
 *         items:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/OrderItem'
 *     OrderItem:
 *       type: object
 *       properties:
 *         productId:
 *           type: number
 *           example: 2434
 *         quantity:
 *           type: number
 *           example: 1
 *         price:
 *           type: number
 *           example: 1000
 */

/**
 * @swagger
 * /order:
 *   post:
 *     summary: Cria um novo pedido
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderInput'
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 *       400:
 *         description: Payload inválido
 *       409:
 *         description: Pedido duplicado
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/order', createOrder);

/**
 * @swagger
 * /order/list:
 *   get:
 *     summary: Lista todos os pedidos
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Lista de pedidos retornada com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/order/list', listOrders);

/**
 * @swagger
 * /order/{id}:
 *   get:
 *     summary: Busca um pedido pelo número do pedido
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Número do pedido
 *     responses:
 *       200:
 *         description: Pedido encontrado
 *       404:
 *         description: Pedido não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/order/:id', getOrderById);

/**
 * @swagger
 * /order/{id}:
 *   put:
 *     summary: Atualiza um pedido existente
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Número do pedido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderInput'
 *     responses:
 *       200:
 *         description: Pedido atualizado com sucesso
 *       400:
 *         description: Payload inválido
 *       404:
 *         description: Pedido não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.put('/order/:id', updateOrder);

/**
 * @swagger
 * /order/{id}:
 *   delete:
 *     summary: Remove um pedido existente
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Número do pedido
 *     responses:
 *       200:
 *         description: Pedido removido com sucesso
 *       404:
 *         description: Pedido não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.delete('/order/:id', deleteOrder);

module.exports = router;
