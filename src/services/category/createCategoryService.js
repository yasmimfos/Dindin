const categoryRepository = require("../../repositories/categoryRepository");

const createCategoryService = {
    async execute(categoria) {
        const category = categoryRepository.verify(categoria);
        if (category >= 1) {
            return res.status(404).json({ mensagem: `A categoria ${categoria} já foi criada` });
        } else {
            const creation = await categoryRepository.create(categoria);
            return creation;
        }
    }
}
module.exports = createCategoryService;