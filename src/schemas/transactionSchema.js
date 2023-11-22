const joi = require('joi');

const transactionSchema = joi.object({
    tipo: joi.string().required().messages({
        'any.required': 'O campo tipo é obrigatório',
        'string.empty': 'O campo tipo é obrigatório'
    }),
    descricao: joi.string().required().messages({
        'any.required': 'O campo descricao é obrigatório',
        'string.empty': 'O campo descricao é obrigatório'
    }),
    valor: joi.number().required().messages({
        'number.base': 'O campo valor é obrigatório',
        'any.required': 'O campo valor é obrigatório'
    }),
    categoria_id: joi.string().required().messages({
        'any.required': 'O campo tipo é obrigatório',
        'string.empty': 'O campo tipo é obrigatório'
    })
});

module.exports = transactionSchema;