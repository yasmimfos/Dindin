const connect = require('../../connect/connect');

const updateUser = async (req, res) => {
    const { nome, email, senha, profissao, idade } = req.body;
    const { id } = req.userLogged;
    try {
        const passwordHashed = await bcrypt.hash(senha, 10);
        await connect('usuarios').update({ nome, email, senha: passwordHashed, profissao, idade }).where({ id });
        return res.status(204).send();
    } catch (erro) {
        console.log(erro);
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

module.exports = updateUser;