/* const validateFilterPerTitulo = (req, res, next) => {
    const { body } = req;

    if(body.Titulo !== null) {
        if (body.Titulo === "" || body.Titulo === undefined) {
            res.status(400).json({message: 'O título não pode ser vazio.'})
        }

        next();
    }

}

module.exports = {
    validateFilterPerTitulo
} */