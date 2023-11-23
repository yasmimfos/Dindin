const connect = require("../../connect/connect");

const updateCategory = async (req, res) => {
    const { categoria, nova_categoria } = req.body;

    try {
        const category = await connect('categorias').where({ categoria });
        if (category < 1) {
            return res.status(404).json({ mensagem: `A categoria ${categoria} não existe` });
        } else {
            await connect('categorias').update({ categoria: nova_categoria }).where({ categoria });
            return res.status(204).send();
        }
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno no servidor' });
    }
};

module.exports = updateCategory;