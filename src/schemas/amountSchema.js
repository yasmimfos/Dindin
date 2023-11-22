const joi = require("joi")

const amountSchema = joi.object({
    valor: joi.number().required().messages({
        'number.base': 'O campo valor é obrigatório',
        'any.required': 'O campo valor é obrigatório'
    })
});
module.exports = amountSchema;