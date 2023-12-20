const bcrypt = require('bcrypt');
const { userRepository } = require('../../repositories');

const userRegisterService = {
    async execute(nome, email, senha, profissao, idade, res) {

        const verifyEmail = await userRepository.getByEmail(email);
        if (verifyEmail) {
            return res.status(500).json({ mensagem: 'O email já foi cadastrado' });
        }

        const passwordHashed = await bcrypt.hash(senha, 10);
        const register = await userRepository.create(nome, email, passwordHashed, profissao, idade);
        const { senha: _, ...user } = register
        return user;

    }
}
module.exports = userRegisterService;