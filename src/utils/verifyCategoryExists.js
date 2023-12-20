const { categoryRepository } = require('../repositories');
const { NotFoundError } = require("../errors");

const verifyCategoryExists = async (categoria) => {
    const category = await categoryRepository.verify(categoria);
    if (category < 1) throw new NotFoundError(`A categoria ${categoria} não existe`);
};

module.exports = verifyCategoryExists;