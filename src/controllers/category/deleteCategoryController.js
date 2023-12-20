const { NotFoundError } = require("../../errors");
const { deleteCategoryService } = require("../../services/category");

const deleteCategoryController = {
    async handle(req, res) {
        try {
            const { categoria } = req.body;
            await deleteCategoryService.execute(categoria)
            return res.status(204).send();
        } catch (error) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ error: error.message });
            }
            return res.status(500).json({ mensagem: 'Erro interno no servidor' });
        }
    }
};

module.exports = deleteCategoryController;