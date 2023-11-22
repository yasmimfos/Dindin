const connect = require("../connect");

const balance = async (req, res) => {
    const { id } = req.userLogged;

    try {
        const list = await connect('transacoes').where('usuario_id', id);
        if (list < 1) {
            return res.status(404).json({ mensagem: 'Não há transações registradas' });
        }
        return res.json(list);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    };

};

const transactionDetails = async (req, res) => {
    const { id } = req.userLogged;
    const transactionId = parseInt(req.params.id);

    try {
        const details = await connect('transacoes').where({ id: transactionId, usuario_id: id });

        if (details < 1) {
            return res.status(404).json({ mensagem: 'Transação inválida' });
        };

        return res.json(details);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    };

};

const createTransaction = async (req, res) => {
    const { id } = req.userLogged;
    const { tipo, descricao, valor, data, categoria } = req.body;

    try {
        const categoryValidation = await connect('categorias').where({ categoria });
        if (categoryValidation.length < 1) {
            await connect('categorias').insert({ categoria });
        };

        const register = await connect('transacoes').insert({ descricao, tipo, valor, categoria, data, usuario_id: id }).returning('*');
        return res.status(201).json(register[0]);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    };
};

//confirmação da transação e chamada de alteração do saldo

const updateTransaction = async (req, res) => {
    const { id } = req.userLogged;
    const transactionId = parseInt(req.params.id);
    const { tipo, descricao, valor, data, categoria } = req.body;

    try {
        const verifyId = await connect('transacoes').where({ id: transactionId });
        if (verifyId.length < 1) {
            return res.status(404).json({ mensagem: 'Transação não encontrada' });
        }
        const register = await connect('transacoes').update({ descricao, tipo, valor, categoria, data, usuario_id: id }).where({ id: transactionId }).returning('*');
        return res.json(register[0]);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

const deleteTransaction = async (req, res) => {
    const { id } = req.userLogged;
    const transactionId = parseInt(req.params.id);

    try {
        const verifyId = await connect('transacoes').where({ id: transactionId, usuario_id: id });
        if (verifyId.length < 1) {
            return res.status(404).json({ mensagem: 'Transação não encontrada' });
        }
        await connect('transacoes').delete().where({ id: transactionId });
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};


const balanceTransaction = async (req, res) => {
    const { id } = req.userLogged;

    try {
        const receive = await connect('transacoes').sum('valor').where({ usuario_id: id, tipo: 'entrada' });
        const payable = await connect('transacoes').sum('valor').where({ usuario_id: id, tipo: 'saida' });
        //somar os valores pra dar retorno
        const balance = {
            entrada: parseInt(receive),
            saida: parseInt(payable.valor)
        };

        return res.status(200).json(balance);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    };
};

module.exports = {
    balance,
    transactionDetails,
    createTransaction,
    updateTransaction,
    deleteTransaction,
    balanceTransaction
}