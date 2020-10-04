const pessoasModel = require("../models/pessoas")


exports.getPessoas = (req, res, next) => {
    return res.send(pessoasModel.pessoasList);
}