const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    pontos: { type: Number, required: true },
    jogo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Jogos',
      required: true
    },
  }
)

const ConquistasModel = mongoose.model('Conquistas', schema)

module.exports = ConquistasModel