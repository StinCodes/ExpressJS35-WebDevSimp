const express = require('express')
const app = express()

//navigating to / path prints "Here" to console and json "Error" to page
app.get('/', (req, res)=>{
  console.log('Here')
  res.json({message : "Error"})
})

//set app to listen on port 3000
app.listen(3000)
