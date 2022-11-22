const express = require('express')
const user = require('../controllers/user')
const router = express.Router()

const usercontroller = require('../controllers/user')

router.get('/users', usercontroller.index )

  router.post('/users', usercontroller.store)

  router.put('/users/:id', usercontroller.update)

  router.delete('/users/:id', usercontroller.delete)
  
  router.get('/users/:id', usercontroller.getById)

module.exports = router