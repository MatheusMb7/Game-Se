const { body, validationResult } = require('express-validator');

const validarAvaliacao = [
  
  body('nota')
    .exists({ checkFalsy: true })
    .withMessage('A nota é obrigatória')
    .isInt({ min: 1, max: 5 })
    .withMessage('A nota deve ser um número inteiro entre 1 e 5')
    .toInt(), 


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
  validarAvaliacao,
  handleValidationErrors,
};