const express = require('express')
const router = express.Router()

const CampeonatosModel = require('../models/CampeonatosModel')
const { validarCampeonato } = require('../validators/CampeonatosValidator')
const { validarID } = require('../validators/IDValidator')

router.get('/campeonatos', async (req, res, next) => {
  const campeonatos = await CampeonatosModel.find().populate(['jogo','usuario'])
  res.json(campeonatos)
})

router.get('/campeonatos/:id', validarID, async (req, res, next) => {
  const campeonatoEncontrado = await CampeonatosModel.findById(req.params.id).populate(['jogo','usuario'])
  if (!campeonatoEncontrado) {
    return res.status(404).json({ erro: "Não encontrado" })
  }
  res.json(campeonatoEncontrado)
})

router.post('/campeonatos/', validarCampeonato, async (req, res, next) => {
  const campeonatoCadastrado = await CampeonatosModel.create(req.body)
  res.status(201).json(campeonatoCadastrado)
})

router.put('/campeonatos/:id', validarID, async (req, res, next) => {
  const id = req.params.id
  const dados = req.body
  const campeonatoAtualizado = await CampeonatosModel.findByIdAndUpdate(id, dados, { new: true })
  if (!campeonatoAtualizado) {
    return res.status(404).json({ erro: "Não encontrado" })
  }
  res.json(campeonatoAtualizado)
})

router.delete('/campeonatos/:id', validarID, async (req, res, next) => {
  await CampeonatosModel.findByIdAndDelete(req.params.id)
  res.status(204).send()
})

module.exports = router