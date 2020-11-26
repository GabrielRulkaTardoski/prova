//todas as tabelas e atts do banco + entidade
const mongoose = require("mongoose");
const pessoaSchema = new mongoose.Schema
({
    nome: 
    {
        type: String,
        required: [true, "Nome é obrigatório."]
    },
    cpf: 
    {
        type: String,
        required: [true, "CPF sempre é obrigatório."]
    },
    idade: 
    {
        type: Number,
        required: [true, "Idade é obrigatória, for some reason."]
    },
    data: 
    {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model("Pessoas", pessoaSchema);