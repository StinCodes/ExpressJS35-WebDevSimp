const express = require("express");
const app = express();

//set up app view engine with ejs
app.set("view engine", "ejs");

//express runs top down so putting logger at top forces it to run each time a route it hit
app.use(logger)

//navigating to / path prints "Here" to console and json "Error" to page
// app.get('/', (req, res)=>{
//   console.log('Here')
//   res.json({message : "Error"})
// })

//render the index.html file with ejs
// app.get("/", (req, res) => {
//   res.render("index", { text: "World" });
// });

//import router
const userRouter = require('./routes/users')
//anything that starts with /users, use the userRouter
app.use('/users', userRouter)


//middleware
function logger(req, res, next){
  console.log(req.originalUrl)
  next()
}


//set app to listen on port 3000
app.listen(3000);
