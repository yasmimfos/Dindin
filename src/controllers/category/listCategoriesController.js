const { NotFoundError } = require("../../errors");
const listCategoriesService = require("../../services/category/listCategoriesService");

const listCategoriesController = {
    async handle(req, res) {
        try {
            const { categoria } = req.query;

            const category = await listCategoriesService.execute(categoria);
            return res.json(category)
        } catch (error) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ error: error.message });
            }
            return res.status(500).json({ mensagem: 'Erro interno no servidor' });
        }
    }
};

module.exports = listCategoriesController;