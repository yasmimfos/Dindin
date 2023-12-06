const { userRegisterService } = require('../../services/userService');

const userRegisterController = {
    async handle(req, res) {
        const { nome, email, senha, profissao, idade } = req.body;

        const user = await userRegisterService.execute(nome, email, senha, profissao, idade);
        return res.status(200).json(user);
    }
};

module.exports = userRegisterController;