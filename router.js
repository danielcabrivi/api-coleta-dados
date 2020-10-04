const Pessoas = require("./controllers/pessoas");

module.exports = function(app) {
    app.get('/api/', function(req, res) {
        res.send({ api: 'API para coleta e obetação de dados IGTI', version: "1.0" });
    });

    app.get('/api/pessoas/',Pessoas.getPessoas);
}