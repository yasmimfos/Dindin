const connect = require("../../connect/connect");

const listCategories = async (req, res) => {
    const { categoria } = req.query
    try {
        if (!categoria) {
            const list = await connect('categorias');
            if (list < 1) {
                return res.status(404).json({ mensagem: 'Ainda não há categorias registradas' });
            }
            return res.json(list);
        } else {
            const listCategory = await connect('categorias').where({ categoria })
            if (listCategory < 1) {
                return res.status(404).json({ mensagem: `Não há nada em ${categoria}` });
            }
            return res.json(listCategory)
        }
    } catch (erro) {
        return res.status(500).json({ mensagem: 'Erro interno no servidor' });
    }
};

module.exports = listCategories;