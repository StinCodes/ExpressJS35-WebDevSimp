const express = require('express')
const router = express.Router()

//router will automatically fill in /users for route
//list out all users
router.get('/', (req, res)=>{
  res.send('User List')
})

//get a new user
router.get('/new', (req, res)=>{
  res.send('User New Form')
})

module.exports = router
