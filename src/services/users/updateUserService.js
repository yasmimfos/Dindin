const bcrypt = require('bcrypt');
const { userRepository } = require("../../repositories");
const { verifyEmails } = require('../../utils');

const updateUserService = {
    async execute(id, nome, email, senha, profissao, idade, res) {
        await verifyEmails(email);

        const passwordHashed = await bcrypt.hash(senha, 10);
        const newUser = await userRepository.update(id, nome, email, passwordHashed, profissao, idade);
        const { senha: _, ...user } = newUser;
        return user;
    }
}
module.exports = updateUserService;