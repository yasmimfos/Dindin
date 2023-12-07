const { userRepository } = require("../../repositories")

const updateUserService = {
    async execute(id, nome, email, senha, profissao, idade, res) {
        const verifyEmail = await userRepository.getByEmail(email);
        if (verifyEmail.length = 1) {
            return res.status(400).json({ mensagem: 'O email já foi cadastrado' });
        };
        const passwordHashed = await bcrypt.hash(senha, 10);
        const newUser = userRepository.update(id, nome, email, passwordHashed, profissao, idade)
        return newUser;
    }
}
module.exports = updateUserService;