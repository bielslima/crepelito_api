const mongoose = require("../database");

const ClientesSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    numero: {
        type: String,
        unique: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Cliente = mongoose.model('clientes', ClientesSchema);
module.exports = Cliente;