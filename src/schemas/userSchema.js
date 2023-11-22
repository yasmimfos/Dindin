const joi = require('joi');

const userSchema = joi.object({
    nome: joi.string().required().messages({
        'any.required': 'O campo nome é obrigatório',
        'string.empty': 'O campo nome é obrigatório'
    }),
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
    profissao: joi.string().required().messages({
        'any.required': 'O campo profissão é obrigatório',
        'string.empty': 'O campo profissão é obrigatório'
    }),
    idade: joi.number().integer().required().messages({
        'any.required': 'O campo idade é obrigatório',
        'number.base': 'O campo idade é obrigatório'
    })
});

module.exports = userSchema;