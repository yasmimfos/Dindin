const categoryRepository = require("../../repositories/categoryRepository");

const deleteCategoryService = {
    async execute(categoria) {
        const category = await categoryRepository.verify(categoria);
        if (category < 1) {
            return res.status(404).json({ mensagem: `A categoria ${categoria} não existe` });
        }
        const deleted = await categoryRepository.delete(categoria);
        return deleted;
    }

}
module.exports = deleteCategoryService;