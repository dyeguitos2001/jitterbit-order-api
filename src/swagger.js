const swaggerJSDoc = require('swagger-jsdoc');

// Configuração base da documentação OpenAPI.
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Jitterbit Order API',
    version: '1.0.0',
    description:
      'API de pedidos desenvolvida em Node.js, Express e MongoDB para o teste técnico da Jitterbit.'
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Servidor local'
    }
  ]
};

const options = {
  definition: swaggerDefinition,
  apis: ['./src/routes/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
