const express = require("express");
const router = express.Router();
const pessoaController = require("../controllers/PessoaController.js");
/*router.get("/", usuarioController.Get);
*/
router.post("/pessoa/cadastrar", pessoaController.Cadastrar);
router.get("/pessoa/listar", pessoaController.Listar);
module.exports = router;