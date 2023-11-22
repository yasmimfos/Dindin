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

// const cadastrarTransacao = async (req, res) => {
//     const { id } = req.userLogged;
//     const { tipo, descricao, valor, data, categoria } = req.body;


//     try {
//         //cadastrar categoria se não existir
//         const query = 'INSERT INTO transacoes (tipo, descricao, valor, data, categoria_id, usuario_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
//         const values = [tipo, descricao, valor, data, categoria_id, userId];

//         const { rows } = await connect('transacoes')(query, values);

//         return res.status(201).json(rows[0]);
//     } catch (error) {
//         return res.status(500).json({ mensagem: 'Erro interno do servidor' });
//     };
// };

// const editarTransacao = async (req, res) => {
//     const { id } = req.userLogged;
//     const transactionId = parseInt(req.params.id);
//     const { tipo, descricao, valor, data, categoria_id } = req.body;

//     if (!tipo || !descricao || !valor || !data || !categoria_id) {
//         return res.status(400).json({ mensagem: 'Todos os campos obrigatórios devem ser informados.' });
//     }

//     if (tipo !== 'entrada' && tipo !== 'saida') {
//         return res.status(400).json({ mensagem: 'O tipo deve ser "entrada" ou "saida".' });
//     }

//     try {
//         const query = 'update transacoes set tipo = $1, descricao = $2, valor = $3, data = $4, categoria_id = $5 where id = $6 AND usuario_id = $7 RETURNING *';
//         const values = [tipo, descricao, valor, data, categoria_id, transactionId, userId];

//         const { rows } = await connect('transacoes')(query, values);

//         if (rows.length === 1) {
//             return res.status(204).end();
//         } else {
//             return res.status(404).json({ mensagem: 'Transação não encontrada.' });
//         }
//     } catch (error) {
//         return res.status(500).json({ mensagem: 'Erro interno do servidor' });
//     }
// };

// const removerTransacao = async (req, res) => {
//     const { id } = req.userLogged;
//     const transactionId = parseInt(req.params.id);

//     try {
//         const query = 'delete from transacoes where id = $1 and usuario_id = $2 returning *';
//         const values = [transactionId, userId];

//         const { rows } = await connect('transacoes')(query, values);

//         if (rows.length === 1) {
//             return res.status(204).end();
//         } else {
//             return res.status(404).json({ mensagem: 'Transação não encontrada.' });
//         }
//     } catch (error) {
//         return res.status(500).json({ mensagem: 'Erro interno do servidor' });
//     }
// };


// const extratoTransacoes = async (req, res) => {
//     const { id } = req.userLogged;

//     try {
//         const queryEntrada = 'select coalesce(sum(valor), 0) as entrada from transacoes where usuario_id = $1 and tipo = $2';
//         const valuesEntrada = [userId, 'entrada'];
//         const { rows: entradaRows } = await connect('transacoes')(queryEntrada, valuesEntrada);

//         const querySaida = 'select coalesce(sum(valor), 0) as saida from transacoes where usuario_id = $1 and tipo = $2';
//         const valuesSaida = [userId, 'saida'];
//         const { rows: saidaRows } = await pool.query(querySaida, valuesSaida);

//         const extrato = {
//             entrada: parseInt(entradaRows[0].entrada),
//             saida: parseInt(saidaRows[0].saida),
//         };

//         return res.status(200).json(extrato);
//     } catch (error) {
//         return res.status(500).json({ mensagem: 'Erro interno do servidor' });
//     };
// };

module.exports = {
    balance,
    transactionDetails //,
    // cadastrarTransacao,
    // editarTransacao,
    // removerTransacao,
    // extratoTransacoes
}