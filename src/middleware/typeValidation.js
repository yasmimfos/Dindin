const typeValidation = (req, res, next) => {
    const { tipo } = req.body
    if (tipo != "entrada" && tipo != "saida") {
        return res.status(400).json({ mensagem: 'O tipo da transação deve ser específicado como entrada ou saida' })
    };
    next();
};

module.exports = typeValidation;