const profile = (req, res) => {
    const { senha: _, ...usuario } = req.userLogged;
    return res.json(usuario);
};

module.exports = profile;