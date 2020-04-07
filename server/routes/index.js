'use strict'
const express = require('express')
const router = express.Router()

// access via localhost/api/test
router.get('/test', (req, res) => {
  res.send({ message: 'test route workded!' })
})

module.exports = router
