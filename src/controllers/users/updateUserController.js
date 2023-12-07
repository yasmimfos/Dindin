const updateUserService = require('../../services/users/updateUserService');

const updateUserController = {
    async handle(req, res) {
        try {
            const { nome, email, senha, profissao, idade } = req.body;
            const { id } = req.userLogged;
            const user = await updateUserService.execute(id, nome, email, senha, profissao, idade, res);
            return user;
        } catch (erro) {
            console.log(erro);
            return res.status(500).json({ mensagem: 'Erro interno do servidor' });
        }
    }
};

module.exports = updateUserController;