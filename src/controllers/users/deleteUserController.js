const { NotFoundError } = require("../../errors");
const deleteUserService = require("../../services/users/deleteUserService");

const deleteUser = {
    async handle(req, res) {
        try {
            const { id } = req.userLogged;
            await deleteUserService.execute(id);
            return res.status(204).send()
        } catch (error) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ error: error.message });
            }
            return res.status(500).json({ mensagem: 'Erro interno do servidor' });
        }
    }
};

module.exports = deleteUser;