const categoryRepository = require("../../repositories/categoryRepository");
const verifyCategoryExists = require("../../utils/verifyCategoryExists");

const deleteCategoryService = {
    async execute(categoria) {
        await verifyCategoryExists(categoria)
        const deleted = await categoryRepository.delete(categoria);
        return deleted;
    }

}
module.exports = deleteCategoryService;