const categoryRepository = require("../../repositories/categoryRepository");
const verifyCategoryExists = require("../../utils/verifyCategoryExists");

const updateCategoryService = {
    async execute(categoria, nova_categoria) {
        await verifyCategoryExists(categoria);
        const updated = await categoryRepository.update(categoria, nova_categoria);
        return updated;
    }
}
module.exports = updateCategoryService;