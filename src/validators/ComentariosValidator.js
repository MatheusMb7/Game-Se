
const { body, validationResult } = require('express-validator');


const validarComentario = [

  body('texto')
    .exists({ checkFalsy: true })
    .withMessage('O texto do comentário é obrigatório')
    .isString()
    .withMessage('O texto deve ser uma string')
    .trim()
    .isLength({ min: 1, max: 500 })
    .withMessage('O comentário deve ter entre 1 e 500 caracteres')
    .escape(), 

  body('jogoId')
    .exists({ checkFalsy: true })
    .withMessage('O ID do jogo é obrigatório')
    .isMongoId()
    .withMessage('O ID do jogo deve ser um ID válido do MongoDB'),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      erro: 'Dados inválidos',
      detalhes: errors.array().map(err => ({
        campo: err.param,
        mensagem: err.msg,
        valor: err.value,
      })),
    });
  }
  next();
};

module.exports = {
  validarComentario,
  handleValidationErrors,
};