const bcrypt = require('bcrypt');
const userRepository = require("../../repositories/userRepository");
const jwt = require("jsonwebtoken");
const { jwtSecretKey, jwtExpired } = require('../../configs/auth');

const loginUserService = {
    async execute(email, senha, res) {
        const user = await userRepository.getByEmail(email);
        if (!user) {
            return res.status(400).json({ mensagem: 'Email ou senha inválido' });
        };

        const passwordValid = await bcrypt.compare(senha, user.senha);
        if (!passwordValid) {
            return res.status(400).json({ mensagem: 'Email ou senha inválido' });
        }
        const token = jwt.sign({ id: user.id }, jwtSecretKey, { expiresIn: jwtExpired });

        return token;
    }
};
module.exports = loginUserService;