const connect = require('../../connect/connect');

const deleteUser = async (req, res) => {
    const { id } = req.userLogged;
    try {
        const user = await connect('usuarios').where({ id });

        if (!user) {
            return res.status(404).json({ mensagem: 'usuário não encontrado' });
        }
        await connect('usuarios').delete().where({ id });

        return res.status(204).send()
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

module.exports = deleteUser;