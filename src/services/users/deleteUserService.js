const userRepository = require("../../repositories/userRepository");

const deleteUserService = {
    async execute(id, res) {
        const user = userRepository.getById(id);
        if (!user) {
            return res.status(404).json({ mensagem: 'usuário não encontrado' });
        }
        //const deleted=
        await userRepository.delete(id);
        //return deleted;
    }
}
module.exports = deleteUserService;
