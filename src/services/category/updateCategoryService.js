const categoryRepository = require("../../repositories/categoryRepository");

const updateCategoryService = {
    async execute(categoria, nova_categoria) {
        const category = categoryRepository.verify(categoria);
        if (category < 1) {
            return res.status(404).json({ mensagem: `A categoria ${categoria} não existe` });
        } else {
            const updated = await categoryRepository.update(categoria, nova_categoria);
            return updated;
        }
    }
}
module.exports = updateCategoryService;