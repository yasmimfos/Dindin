const { Router } = require('express');
const amountConsult = require('../controllers/amount/amountConsult');
const amountRegister = require('../controllers/amount/amountRegister');
const amountUpdate = require('../controllers/amount/amountUpdate');
const tokenValidation = require('../middleware/tokenValidation');
const bodyValidation = require('../middleware/bodyvalidation');
const amountSchema = require('../schemas/amountSchema');

const amountRouter = Router();

amountRouter.use(tokenValidation);
amountRouter.get('/', amountConsult);
amountRouter.post('/', bodyValidation(amountSchema), amountRegister);
amountRouter.put('/', bodyValidation(amountSchema), amountUpdate);

module.exports = amountRouter;