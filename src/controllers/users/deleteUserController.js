const deleteUserService = require("../../services/users/deleteUserService");

const deleteUser = {
    async handle(req, res) {
        try {
            const { id } = req.userLogged;
            await deleteUserService.execute(id, res);
            return res.status(204).send()
        } catch (error) {
            return res.status(500).json({ mensagem: 'Erro interno do servidor' });
        }
    }
};

module.exports = deleteUser;