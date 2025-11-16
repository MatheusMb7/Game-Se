const yup = require('yup')
const mongoose = require('mongoose')

const schema = yup.object().shape(
  {
    dataAdicionado: yup.date().required("Data que foi adicionado é obrigatório"),
     usuario: yup.string().required("O Usuario é obrigatório")
      .test(
        'id-validator',
        'ID do usuario é inválido',
        value => mongoose.Types.ObjectId.isValid(value)
      ),
    jogo: yup.string().required("Jogo é obrigatório")
      .test(
        'id-validator',
        'ID do jogo é inválido',
        value => mongoose.Types.ObjectId.isValid(value)
      ),
  }
)

async function validarFavorito(req, res, next) {
  try {
    await schema.validate(req.body, { abortEarly: false })
    next()
  } catch (error) {
    return res.status(400).json({ erros: error.errors })
  }
}

module.exports = { validarFavorito }