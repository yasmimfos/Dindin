const joi = require('joi');

const loginSchema = joi.object({
    email: joi.string().email().required().messages({
        'any.required': 'O campo email é obrigatório',
        'string.empty': 'O campo email é obrigatório',
        'string.email': 'Formato de email inválido'
    }),
    senha: joi.string().min(4).required().messages({
        'any.required': 'O campo senha é obrigatório',
        'string.empty': 'O campo senha é obrigatório',
        'string.min': 'A senha deve possuir, no mínimo, 4 caracteres'
    }),
});

module.exports = loginSchema;