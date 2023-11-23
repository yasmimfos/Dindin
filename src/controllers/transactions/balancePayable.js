const connect = require("../../connect/connect");

const balancePayable = async (req, res) => {
    const { id } = req.userLogged;

    try {
        const list = await connect('transacoes').select('descricao', 'valor', 'categoria', 'data').where({ usuario_id: id, tipo: 'saida' });
        if (list < 1) {
            return res.status(404).json({ mensagem: 'Não há saídas registradas' });
        }
        //somar o total de saidas
        return res.json(list);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    };

};

module.exports = balancePayable;