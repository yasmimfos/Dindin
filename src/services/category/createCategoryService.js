const categoryRepository = require("../../repositories/categoryRepository");
const verifyCategoryBeforeCreation = require("../../utils/verifyCategryBeforeCreation");

const createCategoryService = {
    async execute(categoria) {
        await verifyCategoryBeforeCreation(categoria);

        const creation = await categoryRepository.create(categoria);
        return creation;
    }
}
module.exports = createCategoryService;