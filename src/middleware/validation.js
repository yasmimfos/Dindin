const jwt = require('jsonwebtoken');
const connect = require('../connect');

const tokenValidation = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ mensagem: 'Para acessar este recurso um token de autenticação válido deve ser enviado.' });
    };

    const token = authorization.split(' ')[1];

    try {
        const { id } = jwt.verify(token, process.env.JWT_HASH);

        const verify = await connect('usuarios').where({ id }).first();

        const { senha: _, ...userLog } = verify;

        req.userLogged = userLog;
        next()
    } catch (erro) {
        if (erro.message = 'invalid token') {
            return res.status(401).json({ mensagem: 'Para acessar este recurso um token de autenticação válido deve ser enviado.' })
        };
        return res.status(500).json({ mensagem: 'Erro interno no servidor' });
    };
};


const bodyValidation = schema => async (req, res, next) => {
    try {
        await schema.validateAsync(req.body);
        next();
    } catch (error) {
        return res.status(400).json({ mensagem: error.message })
    }
};

const typeValidation = (req, res, next) => {
    const { tipo } = req.body

    if (tipo != 'entrada' || tipo != 'saida') {
        return res.status(400).json({ mensagem: 'O tipo da transação deve ser específicado como "entrada" ou "saida"' })
    };

    next();
};

module.exports = { tokenValidation, bodyValidation, typeValidation };