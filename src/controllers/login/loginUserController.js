const loginUserService = require("../../services/login/loginUserService");

const loginUserController = {
    async handle(req, res) {
        try {
            const { email, senha } = req.body

            const token = await loginUserService.execute(email, senha, res);

            return res.status(200).json({ token });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ mensagem: "Erro interno do servidor" });
        }
    }
};

module.exports = loginUserController;