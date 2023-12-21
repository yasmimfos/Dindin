const { ConflictError } = require('../../errors');
const { userRegisterService } = require('../../services');

const userRegisterController = {
    async handle(req, res) {
        try {
            const { nome, email, senha, profissao, idade } = req.body;
            const user = await userRegisterService.execute(nome, email, senha, profissao, idade);
            return res.status(200).json(user);
        } catch (error) {
            if (error instanceof ConflictError) {
                return res.status(400).json({ error: error.message });
            }
            return res.status(500).json({ mensagem: 'Erro interno do servidor' });
        }
    }
};

module.exports = userRegisterController;