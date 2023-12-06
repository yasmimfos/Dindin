const { Router } = require('express');
const tokenValidation = require('../middleware/tokenValidation');
const bodyValidation = require('../middleware/bodyvalidation');
const amountSchema = require('../schemas/amountSchema');
const { amountConsultController, amountRegisterController, amountUpdateController } = require('../controllers');

const amountRouter = Router();

amountRouter.use(tokenValidation);
amountRouter.get('/', amountConsultController.handle);
amountRouter.post('/', bodyValidation(amountSchema), amountRegisterController.handle);
amountRouter.put('/', bodyValidation(amountSchema), amountUpdateController.handle);

module.exports = amountRouter;