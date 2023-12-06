const listCategoriesService = require("../../services/category/listCategoriesService");

const listCategoriesController = {
    async handle(req, res) {
        try {
            const { categoria } = req.query;

            const category = listCategoriesService.execute(categoria);
            return res.json(category)
        } catch (erro) {
            return res.status(500).json({ mensagem: 'Erro interno no servidor' });
        }
    }
};

module.exports = listCategoriesController;