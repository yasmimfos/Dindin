const connect = require("../connect");

const amount = async (req, res) => {
    const { id } = req.userLogged;
    try {
        const value = await connect('saldo').where({ usuario_id: id }).select('valor');

        if (value.length < 1) {
            return res.status(404).json({ mensagem: 'Ainda não há saldo cadastrado' });
        };
        return res.json(value[0]);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

const amountRegister = async (req, res) => {
    const { id } = req.userLogged;
    const { valor } = req.body;

    try {
        const value = await connect('saldo').where({ usuario_id: id }).select('valor');

        if (value.length >= 1) {
            return res.status(403).json({ mensagem: 'Já há saldo cadastrado. Tente atualizar o saldo ou cadastre uma entrada ou saída para alterar o saldo' });
        }
        const newValue = await connect('saldo').insert({ usuario_id: id, valor }).returning('valor');
        return res.json(newValue);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

const amountUpdate = async (req, res) => {
    const { id } = req.userLogged;
    const { valor } = req.body;

    try {
        const value = await connect('saldo').update({ usuario_id: id, valor }).returning('valor');
        return res.json(value[0]);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

module.exports = {
    amount,
    amountRegister,
    amountUpdate
}