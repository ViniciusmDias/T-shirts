const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  preco: {
    type: Number,
    required: true,
  },
  descricao: {
    type: String,
    required: true
  },
  tamanho: {
    type: String,
    required: true
  },
  imagem: {
    type: String,
    required: true
  }, 
})

const Product = mongoose.model('Product', userSchema);
module.exports = Product;