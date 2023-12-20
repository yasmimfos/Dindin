const ConflictError = require("../../errors/ConflictErrors");
const { createCategoryService } = require("../../services");

const createCategoryController = {
    async handle(req, res) {
        try {
            const { categoria } = req.body;
            const create = await createCategoryService.execute(categoria);
            return res.status(204).send();
        } catch (error) {
            if (error instanceof ConflictError) {
                return res.status(400).json({ error: error.message });
            }
            console.log(error)
            return res.status(500).json({ mensagem: 'Erro interno no servidor' });
        }
    }
};
module.exports = createCategoryController;