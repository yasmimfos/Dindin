const userRepository = require("../../repositories/userRepository");

const deleteUserService = {
    async execute(id) {
        await userRepository.delete(id);
    }
}
module.exports = deleteUserService;
