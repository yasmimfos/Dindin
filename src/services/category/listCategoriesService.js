const { categoryRepository } = require("../../repositories");
const verifyCategory = require("../../utils/verifyCategoryExists");

const listCategoriesService = {
    async execute(categoria) {
        if (!categoria) {
            const list = await categoryRepository.list();
            return list;
        } else {
            await verifyCategory(categoria);
            const listCategory = await categoryRepository.verify(categoria);
            return listCategory;
        }
    }
};
module.exports = listCategoriesService;