const express = require("express");
const router = express.Router();
const pessoaController = require("../controllers/PessoaController.js");
/*router.get("/", usuarioController.Get);
*/
router.post("/Pessoa/Cadastrar", pessoaController.Cadastrar);
router.post("/Pessoa/Listar", pessoaController.Listar);
router.post("/Pessoa/Buscar/:cpfPessoa", pessoaController.Buscar);
router.post("/Pessoa/Alterar", pessoaController.Alterar);
router.get("/Pessoa/Remover/:cpfPessoa", pessoaController.Remover);
//router.get("/Login/:usuario/:senha", pessoaController.Login);
module.exports = router;