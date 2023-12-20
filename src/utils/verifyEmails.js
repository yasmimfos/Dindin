const { userRepository } = require("../repositories");

const verifyEmail = async email => {
    const verifying = await userRepository.getByEmail(email);
    console.log(verifying);
    if (verifying) {
        return { mensagem: 'O email já foi cadastrado' };
    }
}

module.exports = verifyEmail;