const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

// Middleware para interpretar JSON no body das requisições.
app.use(express.json());

// Endpoint de verificação de saúde da aplicação.
app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'API de pedidos Jitterbit rodando com sucesso.'
  });
});

// Endpoint da documentação Swagger.
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rotas principais da API.
app.use('/', orderRoutes);

// Tratamento padrão para rotas inexistentes.
app.use((req, res) => {
  return res.status(404).json({ message: 'Rota não encontrada.' });
});

module.exports = app;
