const bcrypt = require('bcrypt');
const { userRepository } = require('../../repositories');

const userRegisterService = {
    async execute(nome, email, senha, profissao, idade) {
        try {
            const verifyEmail = await userRepository.getByEmail(email);
            if (verifyEmail.length = 1) {
                return res.status(400).json({ mensagem: 'O email já foi cadastrado' });
            }

            const passwordHashed = await bcrypt.hash(senha, 10);
            const register = await userRepository.create(nome, email, passwordHashed, profissao, idade);
            const { senha: _, ...user } = register
            return user;
        } catch (error) {
            return res.status(500).json({ mensagem: 'Erro interno do servidor' });
        }
    }
}
module.exports = userRegisterService;