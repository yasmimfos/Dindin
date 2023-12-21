const { ConflictError } = require("../errors");
const { userRepository } = require("../repositories");

const verifyEmail = async email => {
    const emailsExist = await userRepository.getByEmail(email);
    if (emailsExist) throw new ConflictError(`O email ${email} já foi cadastrado`);
}

module.exports = verifyEmail;