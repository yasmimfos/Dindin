const bcrypt = require('bcrypt');
const userRepository = require("../../repositories/userRepository");
const jwtUtils = require("../../utils");

const loginUserService = {
    execute(email, senha) {
        const user = userRepository.getByEmail(email);
        if (!user) {
            return res.status(400).json({ mensagem: 'Email ou senha inválido' })
        };

        const passwordValid = bcrypt.compare(senha, user.senha);
        if (!passwordValid) {
            return res.status(400).json({ mensagem: 'Email ou senha inválido' })
        }
        const token = jwtUtils.generateToken({ id: user.id });
        return token;
    },
};
module.exports = loginUserService;