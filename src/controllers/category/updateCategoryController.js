const { NotFoundError } = require("../../errors");
const updateCategoryService = require("../../services/category/updateCategoryService");

const updateCategoryController = {
    async handle(req, res) {
        try {
            const { categoria, nova_categoria } = req.body;
            const updated = await updateCategoryService.execute(categoria, nova_categoria);
            return res.status(200).json(updated);
        } catch (error) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ error: error.message });
            }
            return res.status(500).json({ mensagem: 'Erro interno no servidor' });
        }

    }

};

module.exports = updateCategoryController;