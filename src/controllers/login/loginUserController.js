const loginUserService = require("../../services/login/loginUserService");

const loginUserController = {
    async handle(req, res) {
        try {
            const { email, senha } = req.body
            const token = loginUserService.execute(email, senha);
            return res.status(200).json({ usuario: req.user, token: token });
        } catch (error) {
            return res
                .status(500)
                .json({ mensagem: "Erro interno do servidor" });
        }
    },
};

module.exports = loginUserController;