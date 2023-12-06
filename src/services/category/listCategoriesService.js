const categoryRepository = require("../../repositories/categoryRepository");

const listCategoriesService = {
    async execute(categoria) {
        if (!categoria) {
            const list = categoryRepository.list();
            if (list < 1) {
                return res.status(200).json({ mensagem: 'Ainda não há categorias registradas' });
            }
            return res.json(list);
        } else {
            const listCategory = await categoryRepository.verify(categoria);
            if (listCategory < 1) {
                return res.status(404).json({ mensagem: `Não há nada em ${categoria}` });
            }
            return listCategory;
        }
    }
};
module.exports = listCategoriesService;