const bcrypt = require('bcrypt');
const { userRepository } = require('../../repositories');

const userRegisterService = {
    async execute(nome, email, senha, profissao, idade, res) {

        const verifyEmail = await userRepository.getByEmail(email);
        if (verifyEmail[0].length = 1) {
            return res.status(400).json({ mensagem: 'O email já foi cadastrado' });
        }

        const passwordHashed = await bcrypt.hash(senha, 10);
        const register = await userRepository.create(nome, email, passwordHashed, profissao, idade);
        const { senha: _, ...user } = register
        return res.status(200).json(user);

    }
}
module.exports = userRegisterService;