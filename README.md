# Jitterbit Order API

API RESTful desenvolvida como solução para o teste técnico da Jitterbit.

## Objetivo
Esta aplicação permite criar, consultar, listar, atualizar e remover pedidos, realizando o mapeamento do payload recebido antes da persistência no banco MongoDB, conforme especificado no enunciado do desafio.

## Tecnologias utilizadas
- Node.js
- Express
- MongoDB
- Mongoose
- Dotenv
- Nodemon
- Swagger

## Diferenciais implementados
- CRUD completo de pedidos
- Transformação de payload antes de salvar no banco
- Validação de dados de entrada
- Tratamento de erros com respostas HTTP adequadas
- Estrutura organizada em camadas
- Documentação com Swagger

## Estrutura do payload de entrada
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
