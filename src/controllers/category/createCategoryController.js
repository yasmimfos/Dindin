const { createCategoryService } = require("../../services");

const createCategoryController = {
    async handle(req, res) {
        try {
            const { categoria } = req.body;
            const create = await createCategoryService.execute(categoria, res);
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ mensagem: 'Erro interno no servidor' });
        }
    }
};
module.exports = createCategoryController;