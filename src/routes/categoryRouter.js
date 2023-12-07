const { Router } = require('express');
const tokenValidation = require('../middleware/tokenValidation');
const { listCategoriesController, createCategoryController, updateCategoryController, deleteCategoryController } = require('../controllers/category');


const categoryRouter = Router();

categoryRouter.use(tokenValidation);
categoryRouter.get('/', listCategoriesController.handle);
categoryRouter.post('/', createCategoryController.handle);
categoryRouter.put('/', updateCategoryController.handle);
categoryRouter.delete('/', deleteCategoryController.handle);

module.exports = categoryRouter;