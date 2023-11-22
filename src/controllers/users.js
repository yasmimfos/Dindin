const bcrypt = require('bcrypt');
const connect = require('../connect');

const userRegister = async (req, res) => {
    const { nome, email, senha, profissao, idade } = req.body;

    try {
        const passwordHashed = await bcrypt.hash(senha, 10);

        const register = await connect('usuarios').insert({ nome, email, profissao, idade, senha: passwordHashed }).returning('*');

        const { senha: _, ...user } = register[0]

        return res.status(200).json(user);
    } catch (erro) {
        console.log(erro);
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

const profile = (req, res) => {
    const { senha: _, ...usuario } = req.userLogged;
    return res.json(usuario);
};

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

module.exports = {
    userRegister,
    profile,
    updateUser,
    deleteUser
}