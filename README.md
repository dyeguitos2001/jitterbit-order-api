# Jitterbit Order API

API CRUD de pedidos desenvolvida em Node.js com Express e MongoDB para o teste técnico da Jitterbit.

## Tecnologias
- Node.js
- Express
- MongoDB
- Mongoose
- Dotenv
- Nodemon

## Funcionalidades
- Criar pedido
- Buscar pedido por ID
- Listar pedidos
- Atualizar pedido
- Remover pedido
- Transformar payload de entrada antes de salvar no banco

## Estrutura esperada do payload de entrada

```json
{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}