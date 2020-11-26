const pessoa = require("../models/PessoaSchema.js");
class PessoaController 
{
//Cadastrar
    async Cadastrar(req, res) 
    {
        var cpfPessoa = req.body.cpf;
        var user = await pessoa.find({ cpf: cpfPessoa });
        if (user[0] != null) 
        {
            console.log("Não foi");
            return res.status(404).send("Essa pessoa já existe. Tente mudar o cpf.")
        }
         else 
        {
            console.log("Foi!");
            var result = await pessoa.create(req.body);
            return res.status(200).json(result);
        }
    }
//Buscar
async Buscar(req, res) 
{
        var reqcpf = req.params.cpfPessoa;
        var result = await pessoa.find({ cpf: reqcpf },
        function (err, doc) 
        {
            if (err)
            return res.send(500, { error: err});
        });
        res.status(200).json(result);
}
 //Listar todos
    async Listar(req, res) 
    {
        var result = await pessoa.find({}); 
        res.status(200).json(result);
    }
//Alterar
    async Alterar(req, res) 
    {
        var cpfPessoa = req.body.cpf;
        var user = await pessoa.find({ cpf: cpfPessoa });
        if (user[0] != null) 
        {
            console.log("Foi!");
            var result = await pessoa.update(req.body);
            return res.status(200).json(result);
        }
         else 
        {
            console.log("Não foi");
            return res.status(404).send("Essa pessoa não existe. A registre no sistema primeiro");

        }
    }
 //Remover
    async Remover(req, res) 
    {
        var cpfPessoa = req.params.cpfPessoa;
        var result = await pessoa.findOneAndRemove({ cpf: cpfPessoa });
        return res.status(200).json(result);
    }
}
 //instanciando
module.exports = new PessoaController();