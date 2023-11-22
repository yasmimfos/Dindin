const connect = require("../connect");

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

const deleteCategory = async (req, res) => {
    const { categoria } = req.body;

    try {
        const category = await connect('categorias').where({ categoria });
        if (category < 1) {
            return res.status(404).json({ mensagem: `A categoria ${categoria} não existe` });
        } else {
            await connect('categorias').delete().where({ categoria });
            return res.status(204).send();
        }
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno no servidor' });
    }
};

module.exports = {
    listCategories,
    createCategory,
    updateCategory,
    deleteCategory
}