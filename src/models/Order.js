const mongoose = require('mongoose');

// Schema dos itens do pedido.
// O _id é desabilitado aqui porque cada item não precisa de um identificador próprio.
const itemSchema = new mongoose.Schema(
  {
    productId: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    price: {
      type: Number,
      required: true,
      min: 0
    }
  },
  { _id: false }
);

// Schema principal do pedido.
// Define as regras de validação e a estrutura que será persistida no MongoDB.
const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    value: {
      type: Number,
      required: true,
      min: 0
    },
    creationDate: {
      type: Date,
      required: true
    },
    items: {
      type: [itemSchema],
      required: true,
      validate: {
        validator: function (items) {
          return Array.isArray(items) && items.length > 0;
        },
        message: 'O pedido deve possuir ao menos um item.'
      }
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

module.exports = mongoose.model('Order', orderSchema);
