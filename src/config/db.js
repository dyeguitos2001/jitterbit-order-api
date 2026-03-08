const mongoose = require('mongoose');

// Responsável por abrir a conexão com o MongoDB.
// Se houver falha, a aplicação é encerrada para evitar que a API rode sem banco.
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB conectado com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar no MongoDB:', error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
