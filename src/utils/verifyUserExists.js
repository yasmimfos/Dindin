const { userRepository } = require("../repositories");
const { NotFoundError } = require("../errors");

const verifyUserExists = async (id) => {
    const userExists = await userRepository.getById(id);
    if (!userExists) throw new NotFoundError("Usuário não encontrado.");
};

module.exports = verifyUserExists;