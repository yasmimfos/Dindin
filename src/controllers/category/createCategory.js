const connect = require("../../connect/connect");

const createCategory = async (req, res) => {
    const { categoria } = req.body;

    try {
        const category = await connect('categorias').where({ categoria });
        if (category >= 1) {
            return res.status(404).json({ mensagem: `A categoria ${categoria} já foi criada` });
        } else {
            await connect('categorias').insert({ categoria });
            return res.status(204).send();
        }
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno no servidor' });
    }
};
module.exports = createCategory;