const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Usuarios',
      required: true
    },
    texto: { type: String, required: true },
    data: { type: Date, required: true },
    jogo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Jogos',
      required: true
    },

    plataforma: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Plataformas',
      required: true
    },
  }
)

const ComentariosModel = mongoose.model('Comentarios', schema)

module.exports = ComentariosModel