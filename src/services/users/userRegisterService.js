const bcrypt = require('bcrypt');
const { userRepository } = require('../../repositories');
const { verifyEmails } = require('../../utils');

const userRegisterService = {
    async execute(nome, email, senha, profissao, idade) {
        await verifyEmails(email);

        const passwordHashed = await bcrypt.hash(senha, 10);
        const register = await userRepository.create(nome, email, passwordHashed, profissao, idade);
        const { senha: _, ...user } = register
        return user;

    }
}
module.exports = userRegisterService;