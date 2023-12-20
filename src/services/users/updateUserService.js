const bcrypt = require('bcrypt');
const { userRepository } = require("../../repositories");

const updateUserService = {
    async execute(id, nome, email, senha, profissao, idade, res) {

        const verifyEmail = await userRepository.getByEmail(email);
        if (verifyEmail) {
            return res.status(400).json({ mensagem: 'O email já foi cadastrado' });
        }

        const passwordHashed = await bcrypt.hash(senha, 10);
        const newUser = await userRepository.update(id, nome, email, passwordHashed, profissao, idade);
        const { senha: _, ...user } = newUser;
        return user;
    }
}
module.exports = updateUserService;