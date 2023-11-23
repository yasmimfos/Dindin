const { Router } = require('express');
const tokenValidation = require('../middleware/tokenValidation');
const listCategories = require('../controllers/category/listCategories');
const createCategory = require('../controllers/category/createCategory');
const updateCategory = require('../controllers/category/updateCategory');
const deleteCategory = require('../controllers/category/deleteCategory');

const categoryRouter = Router();

categoryRouter.use(tokenValidation);
categoryRouter.get('/', listCategories);
categoryRouter.post('/', createCategory);
categoryRouter.put('/', updateCategory);
categoryRouter.delete('/', deleteCategory);

module.exports = categoryRouter;