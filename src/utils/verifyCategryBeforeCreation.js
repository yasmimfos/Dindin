const ConflictError = require("../errors/ConflictErrors");
const { categoryRepository } = require("../repositories");

const verifyCategoryBeforeCreation = async (categoria) => {
    const category = await categoryRepository.verify(categoria);
    if (category) throw new ConflictError(`A categoria ${categoria} já foi criada`)
}
module.exports = verifyCategoryBeforeCreation;