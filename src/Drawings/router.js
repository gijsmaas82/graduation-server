const express = require('express')
const { Router } = express
const Drawing = require('./model')
const auth = require('../auth/middleware')


const router = new Router()

async function newDrawing (req, res) {
  const drawing = {
    URL: req.body.URL,
    // userId: req.user.id
  }

  const registeredUser = await Drawing.create(drawing)

  return res.send(registeredUser)
}

router.post('/drawing', newDrawing)

module.exports = router