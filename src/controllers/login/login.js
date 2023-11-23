const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connect = require("../../connect/connect");

const login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const user = await connect('usuarios').where({ email }).first();

        if (!user) {
            return res.status(400).json({ mensagem: 'Email ou senha inválido' })
        };

        const passwordValid = await bcrypt.compare(senha, user.senha)
        if (!passwordValid) {
            return res.status(400).json({ mensagem: 'Email ou senha inválido' })
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_HASH, { expiresIn: '1h' });

        return res.json(token);
    } catch (erro) {
        console.log(erro);
        return res.status(500).json({ mensagem: erro.message });
    }

};

module.exports = login;