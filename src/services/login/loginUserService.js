const bcrypt = require('bcrypt');
const userRepository = require("../../repositories/userRepository");
const jwt = require("jsonwebtoken");
const { jwtSecretKey, jwtExpired } = require('../../configs/auth');
const { ConflictError } = require('../../errors');

const loginUserService = {
    async execute(email, senha) {
        const user = await userRepository.getByEmail(email);
        if (!user) {
            throw new ConflictError('Email ou senha inválido');
        };

        const passwordValid = await bcrypt.compare(senha, user.senha);
        if (!passwordValid) {
            throw new ConflictError('Email ou senha inválido');
        }
        const token = jwt.sign({ id: user.id }, jwtSecretKey, { expiresIn: jwtExpired });

        return token;
    }
};
module.exports = loginUserService;