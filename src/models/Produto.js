const mongoose = require("../database");

const ProdutoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    preco: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Produto = mongoose.model('produtos', ProdutoSchema);
module.exports = Produto;