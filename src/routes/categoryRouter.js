const { Router } = require('express');
const tokenValidation = require('../middleware/tokenValidation');
const { listCategoriesController, createCategoryController, updateCategoryController, deleteCategoryController } = require('../controllers/category');


const categoryRouter = Router();

categoryRouter.use(tokenValidation);
categoryRouter.get('/', listCategoriesController);
categoryRouter.post('/', createCategoryController);
categoryRouter.put('/', updateCategoryController);
categoryRouter.delete('/', deleteCategoryController);

module.exports = categoryRouter;